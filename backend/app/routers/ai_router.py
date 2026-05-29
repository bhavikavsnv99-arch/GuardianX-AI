from fastapi import APIRouter
from app.schemas.emergency_schema import EmergencyRequest
from ai_module.agents.emergency_agent import analyze_emergency
from app.database.mongodb import history_collection
from datetime import datetime

router = APIRouter()


@router.post("/analyze")
def analyze(data: EmergencyRequest):

    result = analyze_emergency(data.message)

    history_data = {
        "message": data.message,
        "response": result,
        "timestamp": str(datetime.now())
    }

    history_collection.insert_one(history_data)

    return {
        "response": result
    }