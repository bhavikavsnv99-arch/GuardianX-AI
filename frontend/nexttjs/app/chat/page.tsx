"use client";

import { useState } from "react";
import axios from "axios";

type Message = {
  sender: string;
  text: string;
};

export default function ChatPage() {

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello 👋 I am GuardianX-AI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Send Message
  const sendMessage = async () => {

    if (!input.trim()) return;

    // User Message
    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          message: input,
        }
      );

      // AI Message
      const aiMessage: Message = {
        sender: "ai",
        text: response.data.response,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch {

      const errorMessage: Message = {
        sender: "ai",
        text: "❌ Error connecting to backend",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-red-950 text-white flex flex-col">

      {/* Header */}
      <div className="border-b border-gray-800 p-6 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-red-500">
            GuardianX-AI
          </h1>

          <p className="text-gray-400 mt-2">
            Emergency & Safety Assistant
          </p>

        </div>

        <div className="bg-red-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
          AI ONLINE
        </div>

      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`
              flex
              ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }
            `}
          >

            <div
              className={`
                max-w-2xl
                px-6
                py-4
                rounded-3xl
                shadow-2xl
                whitespace-pre-wrap
                text-lg
                transition-all
                duration-300
                ${
                  msg.sender === "user"
                    ? "bg-red-500 rounded-br-none"
                    : "bg-gray-800 border border-gray-700 rounded-bl-none"
                }
              `}
            >

              {msg.text}

            </div>

          </div>

        ))}

        {/* Loading */}
        {loading && (

          <div className="flex justify-start">

            <div
              className="
                bg-gray-800
                border
                border-gray-700
                px-6
                py-4
                rounded-3xl
                rounded-bl-none
                animate-pulse
              "
            >

              AI is analyzing emergency...

            </div>

          </div>

        )}

      </div>

      {/* Input Section */}
      <div className="border-t border-gray-800 bg-black/40 backdrop-blur-md p-6">

        <div className="flex gap-4">

          {/* Input */}
          <input
            type="text"
            placeholder="Describe your emergency..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="
              flex-1
              bg-gray-800
              border
              border-gray-700
              p-4
              rounded-2xl
              outline-none
              text-white
              placeholder-gray-400
              focus:border-red-500
              transition-all
            "
          />

          {/* Send Button */}
          <button
            onClick={sendMessage}
            className="
              bg-red-500
              hover:bg-red-700
              px-8
              rounded-2xl
              font-bold
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}