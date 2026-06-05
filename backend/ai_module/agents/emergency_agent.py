import json

from ai_module.services.gemini_service import ask_gemini
from ai_module.agents.fallback_agent import fallback_analysis


def analyze_emergency(user_input):

    prompt = f"""
You are GuardianX AI.

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

Do not return markdown.
Do not return explanations.
Return JSON only.
"""

    response = ask_gemini(prompt)

    try:

        return json.loads(
            response["response"]
        )

    except Exception as e:

        print("Gemini failed:", e)
        print("Raw response:", response)

        return fallback_analysis(user_input)