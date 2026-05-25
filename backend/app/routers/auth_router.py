from fastapi import APIRouter

router = APIRouter()


@router.get("/emergency")
def emergency():
    return {
        "status": "Emergency Router Working"
    }