from ai_module.agents.emergency_agent import analyze_emergency

test_cases = [
    "There is a fire in my kitchen.",
    "My friend is unconscious.",
    "Someone is breaking into my house.",
    "A bike rider crashed into a truck.",
    "I smell gas in my house.",
    "Flood water is entering my home.",
    "An earthquake just happened.",
    "मेरे घर में आग लग गई है।",
    "मेरा दोस्त बेहोश हो गया है।",
    "Someone stole my motorcycle."
]

for i, case in enumerate(test_cases, start=1):
    print(f"\n========== TEST {i} ==========")
    print(analyze_emergency(case))