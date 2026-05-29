from fastapi import APIRouter
from app.database.mongodb import history_collection

router = APIRouter()


@router.get("/history")
def get_history():

    history = []

    data = history_collection.find()

    for item in data:

        history.append({
            "message": item["message"],
            "response": item["response"],
            "timestamp": item["timestamp"]
        })

    return {
        "history": history
    }