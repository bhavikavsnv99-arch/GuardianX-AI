from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

from ai_module.services.gemini_service import ask_gemini
from app.database.mongodb import history_collection
from ai_module.agents.emergency_agent import analyze_emergency

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


EMERGENCY_KEYWORDS = [
    "help",
    "suicide",
    "kill",
    "emergency",
    "danger",
    "accident",
    "blood",
    "attack",
    "hospital"
]


def detect_emergency(text: str):

    text = text.lower()

    for word in EMERGENCY_KEYWORDS:

        if word in text:

            return True

    return False


@router.post("/chat")
def chat_with_ai(request: ChatRequest):

    emergency_detected = detect_emergency(request.message)

    ai_response = analyze_emergency(request.message)
    history_collection.insert_one({
        "user_message": request.message,
        "ai_response": ai_response,
        "emergency_detected": emergency_detected,
        "timestamp": datetime.now()
    })

    return {
        "success": True,
        "emergency_detected": emergency_detected,
        "data": ai_response
    }