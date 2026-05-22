from fastapi import APIRouter
from app.schemas.emergency_schema import EmergencyRequest
from ai_module.agents.emergency_agent import analyze_emergency

router = APIRouter()


@router.post("/analyze")
def analyze(data: EmergencyRequest):

    result = analyze_emergency(data.message)

    return {
        "response": result
    }