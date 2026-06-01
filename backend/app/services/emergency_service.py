import os

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI

# Load environment variables
load_dotenv()

# Debug check
print("API KEY:", os.getenv("GEMINI_API_KEY"))

# Gemini model
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY")
)

def analyze_emergency(message):

    response = llm.invoke(message)

    return {
        "response": response.content
    }