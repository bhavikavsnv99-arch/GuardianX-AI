from fastapi import APIRouter

router = APIRouter(
    prefix="/history",
    tags=["History"]
)

# Dummy Emergency History
history_data = [
    {
        "type": "Fire",
        "location": "Mumbai",
        "severity": "High"
    },
    {
        "type": "Accident",
        "location": "Delhi",
        "severity": "Medium"
    }
]

# Get History
@router.get("/")
async def get_history():

    return {
        "history": history_data
    }