"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/GuardianSidebar";

import API from "@/services/api";

import {
  Send,
  Bot,
  User,
  ShieldAlert,
} from "lucide-react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function ChatPage() {
  const router = useRouter();

   const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text:
        "Hello! I am GuardianX AI. Describe your emergency or safety concern and I will assist you.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const sendMessage = async (
  customMessage?: string
) => {

   const messageToSend =
  customMessage || input;

if (!messageToSend.trim()) return;

setError("");

const triggerSOS = async () => {

  const sosMessage =
    localStorage.getItem("guardianx_sos");

  if (!sosMessage) return;

  localStorage.removeItem(
    "guardianx_sos"
  );

  await sendMessage(sosMessage);

};

useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {

    router.push("/login");
    return;

  }

  const sosMessage =
    localStorage.getItem("guardianx_sos");

  if (sosMessage) {

    localStorage.removeItem(
      "guardianx_sos"
    );

    // Delay slightly so component is fully mounted
    setTimeout(() => {

      sendMessage(sosMessage);

    }, 100);

  }

}, []);

useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {

    router.push("/login");
    return;

  }

  triggerSOS();

}, [router]);

// USER MESSAGE
const userMessage: Message = {
  sender: "user",
  text: messageToSend,
};

setMessages((prev) => [
  ...prev,
  userMessage,
]);

const userInput = messageToSend;

setInput("");

    try {

      setLoading(true);

      // BACKEND REQUEST
      const response = await API.post("/chat", {
  message: userInput,
});

console.log("API RESPONSE:", response.data);

const emergencyData = response.data.data;

const aiText = `
🚨 Emergency Type: ${emergencyData.emergency_type}

⚠️ Severity: ${emergencyData.severity}

📋 Immediate Actions:
${emergencyData.immediate_actions
  ?.map((action: string) => `• ${action}`)
  .join("\n")}

🚑 Service Required: ${emergencyData.service_required}

📝 Summary:
${emergencyData.summary}
`;

const aiMessage: Message = {
  sender: "ai",
  text: aiText,
};

setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to connect with GuardianX backend."
      );

      const errorMessage: Message = {
        sender: "ai",
        text:
          "❌ Backend connection failed. Please ensure FastAPI server is running.",
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="
      flex
      min-h-screen
      bg-[#050816]
      text-white
    ">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="
        flex-1
        flex
        flex-col
      ">

        {/* HEADER */}
        <div className="
          border-b
          border-white/10
          px-8
          py-6
          bg-[#0B1120]
          backdrop-blur-xl
        ">

          <div className="
            flex
            items-center
            justify-between
          ">

            <div>

              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                text-sm
                mb-5
              ">

                <ShieldAlert size={16} />

                AI Emergency Intelligence

              </div>

              <h1 className="
                text-4xl
                font-bold
                tracking-tight
              ">
                GuardianX AI Assistant
              </h1>

              <p className="
                text-slate-400
                mt-3
                text-lg
              ">
                Real-time emergency analysis and AI-powered guidance
              </p>

            </div>

            {/* STATUS */}
            <div className="
              px-5
              py-3
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-500/20
              text-emerald-400
              text-sm
              font-semibold
              shadow-lg
            ">
              AI ONLINE
            </div>

          </div>

        </div>

        {/* CHAT AREA */}
        <div className="
          flex-1
          overflow-y-auto
          px-8
          py-8
        ">

          <div className="
            max-w-5xl
            mx-auto
            space-y-6
          ">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`
                  flex
                  ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >

                <div
                  className={`
                    max-w-3xl
                    rounded-3xl
                    px-6
                    py-5
                    shadow-xl
                    border
                    transition-all
                    duration-300
                    whitespace-pre-wrap
                    ${
                      message.sender === "user"
                        ? `
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500
                          text-black
                          border-transparent
                        `
                        : `
                          bg-[#0F172A]
                          border-white/10
                        `
                    }
                  `}
                >

                  {/* TOP */}
                  <div className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  ">

                    <div className="
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      bg-black/20
                    ">

                      {message.sender === "user" ? (

                        <User size={18} />

                      ) : (

                        <Bot
                          size={18}
                          className="text-cyan-400"
                        />

                      )}

                    </div>

                    <span className="
                      font-semibold
                      text-sm
                    ">
                      {message.sender === "user"
                        ? "You"
                        : "GuardianX AI"}
                    </span>

                  </div>

                  {/* TEXT */}
                  <p className="
                    leading-8
                    text-[15px]
                  ">
                    {message.text}
                  </p>

                </div>

              </div>

            ))}

            {/* LOADING */}
            {loading && (

              <div className="flex justify-start">

                <div className="
                  bg-[#0F172A]
                  border
                  border-white/10
                  rounded-3xl
                  px-6
                  py-5
                  animate-pulse
                  shadow-xl
                ">

                  GuardianX AI is analyzing the situation...

                </div>

              </div>

            )}

            {/* ERROR */}
            {error && (

              <div className="
                text-red-400
                text-sm
                text-center
              ">
                {error}
              </div>

            )}

          </div>

        </div>

        {/* INPUT AREA */}
        <div className="
          border-t
          border-white/10
          bg-[#0B1120]
          px-8
          py-6
          backdrop-blur-xl
        ">

          <div className="
            max-w-5xl
            mx-auto
            flex
            gap-4
          ">

            {/* INPUT */}
            <input
              type="text"
              value={input}
              placeholder="Describe an emergency or ask GuardianX AI..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  sendMessage();
                }

              }}
              className="
                flex-1
                bg-[#111827]
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                text-white
                outline-none
                focus:border-cyan-400
                transition-all
                placeholder:text-slate-500
              "
            />

            {/* BUTTON */}
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                hover:scale-105
                transition-all
                text-black
                font-semibold
                px-8
                rounded-2xl
                flex
                items-center
                gap-2
                shadow-lg
              "
            >

              <Send size={18} />

              {loading
                ? "Sending..."
                : "Send"}

            </button>

          </div>

        </div>

      </main>

    </div>
  );
}