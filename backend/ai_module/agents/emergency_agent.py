from ai_module.services.gemini_service import ask_gemini


def analyze_emergency(user_input):

    prompt = f"""
You are GuardianX AI.

Analyze this emergency:

{user_input}

Provide:
1. Threat Level
2. Immediate Actions
3. Risks
4. Safety Advice
"""

    return ask_gemini(prompt)