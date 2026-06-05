EMERGENCY_KEYWORDS = [
    "help",
    "suicide",
    "kill",
    "emergency",
    "danger",
    "accident",
    "blood",
    "attack",
    "hospital"
]


def detect_emergency(text: str):

    text = text.lower()

    for word in EMERGENCY_KEYWORDS:

        if word in text:

            return True

    return False