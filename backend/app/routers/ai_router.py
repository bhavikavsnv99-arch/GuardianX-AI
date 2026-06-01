from fastapi import APIRouter

from app.schemas.emergency_schema import EmergencyRequest
from app.services.emergency_service import analyze_emergency
from app.services.chat_service import chat_with_ai

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

# Emergency Analysis Route
@router.post("/analyze")
async def analyze(data: EmergencyRequest):

    result = analyze_emergency(data.message)

    return result


# AI Chat Route
@router.post("/chat")
async def chat(data: EmergencyRequest):

    result = chat_with_ai(data.message)

    return {
        "response": result
    }