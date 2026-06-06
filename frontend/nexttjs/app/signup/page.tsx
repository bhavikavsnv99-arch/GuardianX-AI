"use client";

import Link from "next/link";

import { useState } from "react";

import { useRouter } from "next/navigation";

import API from "@/services/api";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSignup = async () => {

    setError("");

    if (!name || !email || !password) {

      setError("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      await API.post(
        "/signup",
        {
          name,
          email,
          password,
        }
      );

      // Redirect to login
      router.push("/login");

    } catch (err) {

      console.error(err);

      setError("Signup failed");

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

        {/* Title */}
        <div className="text-center">

          <h1 className="
            text-4xl
            font-bold
          ">
            Create Account
          </h1>

          <p className="
            mt-4
            text-slate-400
          ">
            Join GuardianX AI Platform
          </p>

        </div>

        {/* Form */}
        <div className="mt-10 space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
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

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
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
            onChange={(e) =>
              setPassword(e.target.value)
            }
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
            onClick={handleSignup}
            disabled={loading}
            className="
              w-full
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              font-medium
              hover:scale-[1.02]
              transition-all
              text-black
            "
          >

            {loading
              ? "Creating Account..."
              : "Sign Up"}

          </button>

        </div>

        {/* Footer */}
        <div className="
          mt-8
          text-center
          text-sm
          text-slate-400
        ">

          Already have an account?{" "}

          <Link
            href="/login"
            className="
              text-cyan-400
            "
          >
            Login
          </Link>

        </div>

      </div>

    </main>

  );

}