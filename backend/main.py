from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ai_module.agents.emergency_agent import analyze_emergency

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
class ChatRequest(BaseModel):
    message: str

# Home Route
@app.get("/")
async def home():
    return {
        "message": "GuardianX-AI Backend Running"
    }

# Emergency AI Chatbot
@app.post("/analyze")
async def analyze(data: ChatRequest):

    result = analyze_emergency(data.message)

    return {
        "response": result
    }