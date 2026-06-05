from fastapi import APIRouter
from pydantic import BaseModel, EmailStr
from app.database.mongodb import users_collection
from app.services.jwt_service import create_access_token

import bcrypt

router = APIRouter()


class SignupModel(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginModel(BaseModel):
    email: EmailStr
    password: str


@router.post("/signup")
def signup(user: SignupModel):

    existing_user = users_collection.find_one({
        "email": user.email
    })

    if existing_user:

        return {
            "success": False,
            "message": "User already exists"
        }

    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    )

    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password.decode("utf-8")
    })

    return {
        "success": True,
        "message": "User registered successfully"
    }


@router.post("/login")
def login(user: LoginModel):

    existing_user = users_collection.find_one({
        "email": user.email
    })

    if not existing_user:

        return {
            "success": False,
            "message": "User not found"
        }

    stored_password = existing_user["password"]

    password_correct = bcrypt.checkpw(
        user.password.encode("utf-8"),
        stored_password.encode("utf-8")
    )

    if not password_correct:

        return {
            "success": False,
            "message": "Invalid password"
        }

    access_token = create_access_token({
        "email": existing_user["email"]
    })

    return {
        "success": True,
        "message": "Login successful",
        "access_token": access_token,
        "user": {
            "name": existing_user["name"],
            "email": existing_user["email"]
        }
    }