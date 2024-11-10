import type { Express } from "express";
import { OpenAI } from "openai";
import { PythonShell, Options } from 'python-shell';
import path from 'path';

const openai = new OpenAI();

// Import cases from CaseSummary component
import { cases } from "../client/src/cases";

const getPdfContext = async (pdfPath: string): Promise<string> => {
  try {
    const options: Options = {
      mode: 'text' as const,
      pythonOptions: ['-u'],
      scriptPath: 'server',
      args: [pdfPath]
    };

    return new Promise((resolve, reject) => {
      PythonShell.run('pdf_utils.py', options).then(results => {
        if (results && results.length > 0) {
          resolve(results.join('\n'));
        } else {
          resolve('');
        }
      }).catch(err => {
        console.error('Error running Python script:', err);
        resolve('');
      });
    });
  } catch (error) {
    console.error('Error getting PDF context:', error);
    return '';
  }
};

const createSystemPrompt = async (pdfUrl?: string, caseContext?: any) => {
    let basePrompt = `You are an expert consultant specializing in Bay Area landlord-tenant law with access to a database of 30 real cases. Your responses must:
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
        basePrompt += `\n\nCurrent Case Context:
Case #${caseContext.id}: ${caseContext.title}
Issues: ${caseContext.issues.join(', ')}
Outcome: ${caseContext.outcome.join(', ')}`;
    }

    if (pdfUrl) {
        const pdfContext = await getPdfContext(pdfUrl);
        if (pdfContext) {
            basePrompt += `\n\nRelevant Case Document Content:
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
            model: "gpt-4o-mini",
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
