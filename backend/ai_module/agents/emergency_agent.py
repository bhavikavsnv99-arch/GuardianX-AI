from ai_module.services.gemini_service import ask_gemini

def analyze_emergency(user_input):

    prompt = f"""
You are GuardianX AI, an intelligent emergency response assistant.

Analyze the emergency situation below.

User Message:
{user_input}

Rules:
- Emergency Type must be one of:
  Medical, Fire, Crime, Accident, Natural Disaster, Gas Leak, Other

- Severity must be ONLY one of:
  LOW
  MEDIUM
  HIGH
  CRITICAL

- Give concise emergency instructions.

Return exactly in this format:

Emergency Type:
Severity:
Immediate Actions:
Emergency Service Required:
Summary:
"""

    return ask_gemini(prompt)