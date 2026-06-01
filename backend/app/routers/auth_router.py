from fastapi import APIRouter, HTTPException

from app.schemas.auth_schema import LoginRequest

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# Login Route
@router.post("/login")
async def login(data: LoginRequest):

    # Dummy Login Logic
    if data.email == "admin@gmail.com" and data.password == "1234":

        return {
            "message": "Login Successful"
        }

    raise HTTPException(
        status_code=401,
        detail="Invalid Credentials"
    )


# Register Route
@router.post("/register")
async def register(data: LoginRequest):

    return {
        "message": "User Registered Successfully",
        "email": data.email
    }