import type { Express } from "express";
import { OpenAI } from "openai";

const openai = new OpenAI();

const SYSTEM_PROMPT = `You are a legal expert specializing in Bay Area landlord-tenant law. You provide advice based on real cases and current regulations. Focus on:
- Rent control and tenant protections
- Eviction laws and tenant rights
- Maintenance and habitability issues
- Security deposits and rent increases
- Local ordinances in SF, Oakland, and surrounding areas

Keep responses clear, practical, and specific to Bay Area regulations.`;

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
        max_tokens: 1000
      });

      const reply = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";
      res.json({ message: reply });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to process your request" });
    }
  });
}
