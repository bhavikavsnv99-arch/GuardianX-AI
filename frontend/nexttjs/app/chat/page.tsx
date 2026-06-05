"use client";

import { useState } from "react";
import Sidebar from "@/components/GuardianSidebar";
import { Send, Bot, User } from "lucide-react";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am GuardianX AI. Describe your emergency or safety concern and I will assist you.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;

    setInput("");
    setLoading(true);

    // MOCK MODE
    // Replace later with backend /chat API

    setTimeout(() => {
      const aiMessage: Message = {
        sender: "ai",
        text: `Emergency analysis completed.

Situation:
${userInput}

Recommended Action:
• Stay calm
• Contact emergency services if needed
• Move to a safe location
• Continue monitoring the situation

GuardianX AI assessment generated successfully.`,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 flex flex-col">

        {/* Header */}
        <div className="border-b border-slate-800 px-8 py-6 bg-slate-900">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-bold">
                GuardianX{" "}
                <span className="text-cyan-400">
                  AI Assistant
                </span>
              </h1>

              <p className="text-slate-400 mt-2">
                AI-powered emergency response and safety guidance
              </p>

            </div>

            <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 text-sm font-semibold">
              AI ONLINE
            </div>

          </div>

        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-3xl rounded-2xl px-6 py-4 shadow-lg ${
                  message.sender === "user"
                    ? "bg-cyan-500 text-black"
                    : "bg-slate-900 border border-slate-800"
                }`}
              >

                <div className="flex items-center gap-2 mb-3">

                  {message.sender === "user" ? (
                    <User size={18} />
                  ) : (
                    <Bot
                      size={18}
                      className="text-cyan-400"
                    />
                  )}

                  <span className="font-semibold">
                    {message.sender === "user"
                      ? "You"
                      : "GuardianX AI"}
                  </span>

                </div>

                <p className="whitespace-pre-wrap">
                  {message.text}
                </p>

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 animate-pulse">

                GuardianX AI is analyzing the situation...

              </div>

            </div>

          )}

        </div>

        {/* Input */}
        <div className="border-t border-slate-800 bg-slate-900 p-6">

          <div className="flex gap-4">

            <input
              type="text"
              value={input}
              placeholder="Describe an emergency or ask a safety question..."
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
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                bg-cyan-500
                hover:bg-cyan-600
                text-black
                font-semibold
                px-6
                rounded-xl
                transition
                flex
                items-center
                gap-2
              "
            >
              <Send size={18} />
              Send
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}