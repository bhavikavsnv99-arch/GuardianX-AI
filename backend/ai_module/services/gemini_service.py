from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def ask_gemini(prompt: str):

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return {
            "success": True,
            "response": response.text
        }

    except Exception as e:

        print("Gemini Error:", e)

        return {
            "success": False,
            "response": {
                "emergency_type": "UNKNOWN",
                "severity": "UNKNOWN",
                "immediate_actions": [
                    "Contact emergency services immediately"
                ],
                "service_required": "Unknown",
                "summary": "AI service temporarily unavailable"
            }
        }