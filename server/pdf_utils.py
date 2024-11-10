from PyPDF2 import PdfReader
import os
import sys

def extract_text_from_pdf(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text.strip()
    except Exception as e:
        print(f"Error extracting text from PDF: {e}", file=sys.stderr)
        return ""

if __name__ == "__main__":
    if len(sys.argv) > 1:
        pdf_path = sys.argv[1]
        actual_path = os.path.join('client/public', pdf_path.lstrip('/'))
        if os.path.exists(actual_path):
            result = extract_text_from_pdf(actual_path)
            print(result)
        else:
            print(f"PDF file not found: {actual_path}", file=sys.stderr)
    else:
        print("No PDF path provided", file=sys.stderr)
