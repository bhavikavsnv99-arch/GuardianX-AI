"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="grid lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-12">

            <h1 className="text-6xl font-bold text-white">
              GuardianX AI
            </h1>

            <p className="mt-6 text-xl text-cyan-50">
              Smart Emergency Response Platform
            </p>

            <div className="mt-12 space-y-5 text-white">
              <div>✓ AI Emergency Analysis</div>
              <div>✓ Real-Time Incident Monitoring</div>
              <div>✓ Emergency Mapping</div>
              <div>✓ Smart Reports & Insights</div>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center p-10 lg:p-16">

            <div className="w-full max-w-md">

              <div className="mb-10">

                <h2 className="text-4xl font-bold text-white">
                  Create Account
                </h2>

                <p className="mt-3 text-slate-400">
                  Join GuardianX AI platform
                </p>

              </div>

              <div className="space-y-5">

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 text-white outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-4 text-white outline-none focus:border-cyan-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-4 text-cyan-400 text-sm"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>

                  </div>
                </div>

                <button
                  className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Create Account
                </button>

                <div className="text-center text-slate-400">
                  Already have an account?
                </div>

                <Link
                  href="/login"
                  className="block w-full rounded-xl border border-slate-700 py-4 text-center text-white transition hover:bg-slate-800"
                >
                  Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}