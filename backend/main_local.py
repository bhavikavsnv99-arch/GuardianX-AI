from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from google import genai
from dotenv import load_dotenv
import os

# Load .env
load_dotenv(override=True)
print(os.getenv("GEMINI_API_KEY"))

# Create Gemini client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

# FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class EmergencyRequest(BaseModel):
    message: str

# Home route
@app.get("/")
def home():
    return {
        "message": "GuardianX Backend Running"
    }

# Analyze route
@app.post("/analyze")
def analyze(data: EmergencyRequest):

    try:

        user_message = data.message

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=f"""
            You are GuardianX AI.

            Analyze this emergency:

            {user_message}

            Give:
            1. Emergency Type
            2. Severity
            3. Safety Advice
            """
        )

        return {
            "response": response.text
        }

    except Exception as e:

        print("ERROR:")
        print(e)

        return {
            "response": f"Backend Error: {str(e)}"
        }