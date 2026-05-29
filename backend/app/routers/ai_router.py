from fastapi import APIRouter
from app.schemas.emergency_schema import EmergencyRequest
from ai_module.agents.emergency_agent import analyze_emergency
from app.database.mongodb import db
from datetime import datetime

router = APIRouter()

@router.post("/analyze")
def analyze(data: EmergencyRequest):

    result = analyze_emergency(data.message)

    severity = "LOW"

    if "high" in result.lower():
        severity = "HIGH"

    elif "medium" in result.lower():
        severity = "MEDIUM"

    timestamp = datetime.now()

    db.emergencies.insert_one({
        "user_message": data.message,
        "ai_response": result,
        "severity": severity,
        "timestamp": timestamp
    })

    return {
        "response": result
    }