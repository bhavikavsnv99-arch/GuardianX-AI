import json
from ai_module.services.gemini_service import ask_gemini


def analyze_emergency(user_input):

    prompt = f"""
You are GuardianX AI, an emergency response assistant.

Analyze the emergency below.

User Message:
{user_input}

Return ONLY valid JSON.

{{
    "emergency_type": "",
    "severity": "",
    "immediate_actions": [],
    "service_required": "",
    "summary": ""
}}
"""

    response = ask_gemini(prompt)

    return json.loads(response)