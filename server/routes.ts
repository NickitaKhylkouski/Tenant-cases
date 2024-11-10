import type { Express } from "express";
import { OpenAI } from "openai";
import { PythonShell } from 'python-shell';
import { promisify } from 'util';
import path from 'path';

const openai = new OpenAI();

// Import cases from CaseSummary component
import { cases } from "../client/src/cases";

const getPdfContext = async (pdfPath: string): Promise<string> => {
  try {
    const pyshell = new PythonShell('server/pdf_utils.py', {
      mode: 'text',
      pythonOptions: ['-u'],
    });
    
    const runPython = promisify(pyshell.run).bind(pyshell);
    const result = await runPython([pdfPath]);
    return result.join('\n');
  } catch (error) {
    console.error('Error getting PDF context:', error);
    return '';
  }
};

const createSystemPrompt = async (pdfUrl?: string, caseContext?: any) => {
    let basePrompt = `You are a legal expert specializing in Bay Area landlord-tenant law with access to a database of 30 real cases. Your responses must:
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
- Keep responses practical and specific to Bay Area regulations`;

    if (caseContext) {
        basePrompt += `

Current Case Context:
Case #${caseContext.id}: ${caseContext.title}
Issues: ${caseContext.issues.join(', ')}
Outcome: ${caseContext.outcome.join(', ')}`;
    }

    if (pdfUrl) {
        const pdfContext = await getPdfContext(pdfUrl);
        if (pdfContext) {
            basePrompt += `

Relevant Case Document Content:
${pdfContext}`;
        }
    }

    return basePrompt;
};

export function registerRoutes(app: Express) {
  app.post("/api/chat", async (req, res) => {
    try {
        const { message, pdfUrl, caseContext } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const systemPrompt = await createSystemPrompt(pdfUrl, caseContext);

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: systemPrompt },
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
