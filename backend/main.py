from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class ChatRequest(BaseModel):
    message: str

# Home Route
@app.get("/")
async def home():
    return {
        "message": "GuardianX-AI Backend Running"
    }

# Emergency AI Chatbot
@app.post("/analyze")
async def analyze(data: ChatRequest):

    user_message = data.message.lower()

    response = ""

    # FIRE
    if "fire" in user_message:

        response = """
🔥 Emergency Type: Fire Emergency

⚠ Severity: High

✅ Safety Advice:
- Evacuate immediately
- Stay low to avoid smoke
- Call fire department
- Do not use elevators

📞 Recommended Services:
- Fire Brigade
- Ambulance

🚨 GuardianX-AI:
Stay calm and move to a safe area immediately.
"""

    # FOLLOWING / STALKING
    elif "following" in user_message or "stalking" in user_message:

        response = """
🚨 Emergency Type: Personal Threat

⚠ Severity: Medium to High

✅ Safety Advice:
- Move to a crowded/public area
- Call a trusted person
- Avoid isolated places
- Contact police if danger increases

📞 Recommended Services:
- Police Helpline
- Emergency Contacts

🛡 GuardianX-AI:
Your safety is important. Stay alert and seek help immediately.
"""

    # ACCIDENT
    elif "accident" in user_message:

        response = """
🚑 Emergency Type: Road Accident

⚠ Severity: High

✅ Safety Advice:
- Check for injuries
- Call ambulance immediately
- Keep injured person stable
- Avoid traffic danger

📞 Recommended Services:
- Ambulance
- Police

🛡 GuardianX-AI:
Medical assistance may be required urgently.
"""

    # DEFAULT RESPONSE
    else:

        response = f"""
🤖 GuardianX-AI Response

I understand your situation:
"{data.message}"

✅ Advice:
Please stay calm and contact emergency services if necessary.
"""

    return {
        "response": response
    }