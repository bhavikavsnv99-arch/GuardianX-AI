from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client()

def analyze_emergency(user_text):

    prompt = f"""
    Analyze this emergency:

    {user_text}

    Return:
    1. Emergency Type
    2. Severity (Low/Medium/High)
    3. Immediate Advice
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text