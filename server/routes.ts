import type { Express } from "express";
import { OpenAI } from "openai";

const openai = new OpenAI();

// Import cases from CaseSummary component
import { cases } from "../client/src/cases";

const SYSTEM_PROMPT = `You are a legal expert specializing in Bay Area landlord-tenant law with access to a database of 30 real cases. Your responses must:
1. Be concise and under 200 words per response
2. Focus ONLY on landlord-tenant law topics including:
   - Rent control and tenant protections
   - Eviction laws and tenant rights
   - Maintenance and habitability issues
   - Security deposits and rent increases
   - Local ordinances in SF, Oakland, and surrounding areas

Important Rules:
- Always reference relevant cases from our database when applicable
- When citing a case, use the format "Case #X" and briefly describe its relevance
- Reject any off-topic requests
- Keep responses practical and specific to Bay Area regulations

Case Database:
${JSON.stringify(cases, null, 2)}

Response Format:
1. Direct answer to the question
2. Brief explanation with key points
3. Reference to relevant case(s) from our database
4. Relevant local regulation citation if applicable

Example Response:
"Yes, you likely have a case. Issues with windows affecting weather protection are considered habitability violations. In Case #1, a tenant faced similar issues with single-pane windows and inadequate heating, resulting in a 50% rent reduction for three months. Your situation could warrant similar relief under California Civil Code Section 1941.1."`;

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
