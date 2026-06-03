def fallback_analysis(user_input):

    text = user_input.lower()

    # Fire
    if "fire" in text or "burning" in text or "आग" in text:

        return {
            "emergency_type": "Fire Emergency",
            "severity": "High",
            "immediate_actions": [
                "Evacuate immediately",
                "Stay low to avoid smoke",
                "Call fire department"
            ],
            "service_required": "Fire Brigade",
            "summary": "Possible fire emergency detected."
        }

    # Accident
    elif "accident" in text or "crash" in text:

        return {
            "emergency_type": "Road Accident",
            "severity": "High",
            "immediate_actions": [
                "Call ambulance",
                "Check for injuries",
                "Move to a safe location"
            ],
            "service_required": "Ambulance",
            "summary": "Road accident detected."
        }

    # Unconscious
    elif "unconscious" in text or "बेहोश" in text:

        return {
            "emergency_type": "Medical Emergency",
            "severity": "Critical",
            "immediate_actions": [
                "Call ambulance",
                "Check breathing",
                "Provide first aid"
            ],
            "service_required": "Ambulance",
            "summary": "Person may require urgent medical attention."
        }

    # Gas Leak
    elif "gas" in text:

        return {
            "emergency_type": "Gas Leak",
            "severity": "High",
            "immediate_actions": [
                "Open windows",
                "Do not use electrical switches",
                "Leave the building"
            ],
            "service_required": "Emergency Services",
            "summary": "Possible gas leak detected."
        }

    # Flood
    elif "flood" in text:

        return {
            "emergency_type": "Flood",
            "severity": "High",
            "immediate_actions": [
                "Move to higher ground",
                "Avoid flood water",
                "Follow local authorities"
            ],
            "service_required": "Disaster Response",
            "summary": "Flood emergency detected."
        }

    # Crime
    elif "break into" in text or "robbery" in text or "thief" in text:

        return {
            "emergency_type": "Security Threat",
            "severity": "High",
            "immediate_actions": [
                "Stay hidden",
                "Call police",
                "Avoid confrontation"
            ],
            "service_required": "Police",
            "summary": "Possible criminal activity detected."
        }

    return {
        "emergency_type": "Unknown",
        "severity": "Medium",
        "immediate_actions": [
            "Contact emergency services"
        ],
        "service_required": "Emergency Services",
        "summary": "Unable to classify emergency."
    }