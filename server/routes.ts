import type { Express } from "express";
import { OpenAI } from "openai";

const openai = new OpenAI();

const SYSTEM_PROMPT = `You are a legal expert specializing in Bay Area landlord-tenant law. Your responses must:
1. Be concise and under 200 words per response
2. Focus ONLY on landlord-tenant law topics including:
   - Rent control and tenant protections
   - Eviction laws and tenant rights
   - Maintenance and habitability issues
   - Security deposits and rent increases
   - Local ordinances in SF, Oakland, and surrounding areas

Important Rules:
- Reject any off-topic requests (e.g., writing poems, general chat, non-legal questions)
- If a question is not related to Bay Area landlord-tenant law, politely explain that you can only assist with relevant legal topics
- Keep responses practical and specific to Bay Area regulations
- Cite relevant local ordinances when applicable

Response Format:
- Start with a clear yes/no or direct answer when applicable
- Provide brief explanation with key points
- End with relevant local regulation reference if applicable`;

export function registerRoutes(app: Express) {
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 400
      });

      const reply = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";
      res.json({ message: reply });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to process your request" });
    }
  });
}
