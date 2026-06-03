from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

print(os.getenv("GEMINI_API_KEY")) 

client = genai.Client()

def ask_gemini(prompt):

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:

        print("Gemini Error:", e)

        return """
{
  "emergency_type":"UNKNOWN",
  "severity":"UNKNOWN",
  "immediate_actions":["Contact emergency services immediately"],
  "service_required":"Unknown",
  "summary":"AI service temporarily unavailable"
}
"""