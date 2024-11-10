from PyPDF2 import PdfReader
import os

def extract_text_from_pdf(pdf_path):
    """Extract text content from a PDF file."""
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text.strip()
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        return ""

def get_pdf_context(pdf_path):
    """Get the text content from a PDF file with proper path handling."""
    try:
        # Convert the URL path to actual file path
        actual_path = os.path.join('client/public', pdf_path.lstrip('/'))
        if not os.path.exists(actual_path):
            return ""
        return extract_text_from_pdf(actual_path)
    except Exception as e:
        print(f"Error getting PDF context: {e}")
        return ""
