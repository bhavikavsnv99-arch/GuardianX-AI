"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import API from "@/services/api";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {

    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const response = await API.post(
        "/login",
        {
          email,
          password,
        }
      );

      if (!response.data?.success) {
        throw new Error(
          response.data?.message || "Login failed"
        );
      }

      if (!response.data.access_token) {
        throw new Error("Missing access token");
      }

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      } else {
        localStorage.removeItem("user");
      }

      // Redirect
      router.push("/dashboard");

    } catch (err) {

      console.error(err);

      setError("Invalid credentials");

    } finally {

      setLoading(false);

    }

  };

  return (

    <main className="
      min-h-screen
      bg-[#06070A]
      text-white
      flex
      items-center
      justify-center
      px-6
    ">

      <div className="
        w-full
        max-w-md
        rounded-[32px]
        bg-white/[0.04]
        border
        border-white/10
        backdrop-blur-2xl
        p-10
      ">

        <div className="text-center">

          <h1 className="
            text-4xl
            font-bold
          ">
            Welcome Back
          </h1>

          <p className="
            mt-4
            text-slate-400
          ">
            Login to GuardianX platform
          </p>

        </div>

        <div className="mt-10 space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              h-14
              rounded-2xl
              bg-[#0F172A]
              border
              border-white/5
              px-5
              outline-none
              text-white
            "
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full
              h-14
              rounded-2xl
              bg-[#0F172A]
              border
              border-white/5
              px-5
              outline-none
              text-white
            "
          />

          {/* Error */}
          {error && (

            <div className="
              text-red-400
              text-sm
            ">
              {error}
            </div>

          )}

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              font-medium
              hover:scale-[1.02]
              transition-all
            "
          >

            {loading
              ? "Logging in..."
              : "Login"
            }

          </button>

        </div>

        <div className="
          mt-8
          text-center
          text-sm
          text-slate-400
        ">

          Don&apos;t have an account?{" "}

          <Link
            href="/signup"
            className="
              text-violet-400
            "
          >
            Sign Up
          </Link>

        </div>

      </div>

    </main>
  );
}