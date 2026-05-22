from fastapi import APIRouter
from app.schemas.emergency_schema import EmergencyRequest

router = APIRouter()


@router.post("/analyze")
def analyze(data: EmergencyRequest):

    return {
        "received_message": data.message
    }