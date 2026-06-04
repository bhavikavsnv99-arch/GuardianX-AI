from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.ai_router import router as ai_router
from app.routers.auth_router import router as auth_router
from app.routers.history_router import router as history_router

app = FastAPI(
    title="GuardianX AI Backend",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router)
app.include_router(auth_router)
app.include_router(history_router)


@app.get("/")
def home():

    return {
        "message": "GuardianX Backend Running"
    }