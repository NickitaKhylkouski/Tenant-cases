from fpdf import FPDF
import os
import re
import json

def create_pdf(case_number, title):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", "B", 16)
    pdf.cell(0, 10, f"Case #{case_number}", ln=True, align='C')
    pdf.set_font("Arial", "", 12)
    pdf.cell(0, 10, title, ln=True, align='C')
    pdf.cell(0, 10, "This is a placeholder PDF for demonstration purposes.", ln=True, align='C')
    
    # Create filename from case number and title
    filename = f'case-{case_number}-{title.lower().replace(" ", "-")}.pdf'
    pdf_path = os.path.join('client/public/pdfs', filename)
    
    # Ensure the directory exists
    os.makedirs('client/public/pdfs', exist_ok=True)
    
    pdf.output(pdf_path)
    print(f"Created {pdf_path}")

# Read cases from cases.ts to get titles
with open('client/src/cases.ts', 'r') as f:
    cases_content = f.read()

# Extract the cases array using a more robust approach
match = re.search(r'export const cases: Case\[] = (\[[\s\S]*?\]);', cases_content)
if not match:
    raise ValueError("Could not find cases array in cases.ts")

cases_str = match.group(1)
# Convert TypeScript array to valid JSON
cases_str = re.sub(r'(\w+):', r'"\1":', cases_str)  # Convert property names to strings
cases_data = json.loads(cases_str)

# Create PDFs for each case
for case in cases_data:
    create_pdf(case["id"], case["title"])
