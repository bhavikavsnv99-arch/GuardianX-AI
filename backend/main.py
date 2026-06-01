from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.ai_router import router as ai_router
from app.routers.auth_router import router as auth_router
from app.routers.history_router import router as history_router

app = FastAPI(
    title="GuardianX-AI Backend"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(ai_router)
app.include_router(auth_router)
app.include_router(history_router)

# Home Route
@app.get("/")
async def home():

    return {
        "message": "GuardianX-AI Backend Running"
    }