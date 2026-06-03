from ai_module.agents.emergency_agent import analyze_emergency

tests = [

    "There is a fire in my kitchen",

    "My friend is unconscious",

    "Someone is trying to break into my house",

    "I smell gas in my house",

    "Flood water is entering my home",

    "A biker crashed into a truck",

    "मेरे घर में आग लग गई है",

    "मेरा दोस्त बेहोश हो गया है"
]

for test in tests:

    print("\n====================")
    print(test)
    print("====================")

    print(analyze_emergency(test))