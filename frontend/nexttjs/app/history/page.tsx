"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/GuardianSidebar";
import API from "@/services/api";

type HistoryItem = {
  user_message: string;
  ai_response: string | Record<string, unknown>;
  emergency_detected: boolean;
  timestamp: string;
};

export default function HistoryPage() {

  const router = useRouter();

  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      router.push("/login");
      return;

    }

    fetchHistory();

  }, [router]);

  const fetchHistory = async () => {

    try {

      const response = await API.get("/history");

      setHistory(
        response.data.history || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-3">
            Emergency History
          </h1>

          <p className="text-slate-400 mb-10">
            Previous AI emergency analyses
          </p>

          {loading ? (

            <div className="text-slate-400">
              Loading history...
            </div>

          ) : history.length === 0 ? (

            <div className="text-slate-400">
              No history found.
            </div>

          ) : (

            <div className="space-y-6">

              {history.map((item, index) => (

                <div
                  key={index}
                  className="
                    bg-[#0F172A]
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                  "
                >

                  <div className="flex justify-between mb-4">

                    <div>

                      <h3 className="font-semibold text-cyan-400">
                        User Message
                      </h3>

                      <p className="mt-2">
                        {item.user_message}
                      </p>

                    </div>

                    <div
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        ${
                          item.emergency_detected
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }
                      `}
                    >
                      {item.emergency_detected
                        ? "Emergency"
                        : "Normal"}
                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-4">

                    <h3 className="font-semibold text-violet-400 mb-2">
                      AI Response
                    </h3>

                    <pre className="whitespace-pre-wrap text-slate-300">
                      {typeof item.ai_response === "string"
                        ? item.ai_response
                        : JSON.stringify(
                            item.ai_response,
                            null,
                            2
                          )}
                    </pre>

                  </div>

                  <div className="mt-4 text-xs text-slate-500">
                    {item.timestamp}
                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
}