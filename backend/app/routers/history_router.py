from fastapi import APIRouter, Depends

from app.database.mongodb import history_collection
from app.services.auth_service import verify_token

router = APIRouter()


@router.get("/history")
def get_history(user=Depends(verify_token)):

    history = list(history_collection.find({}, {"_id": 0}))

    return {
        "success": True,
        "user": user,
        "history": history
    }