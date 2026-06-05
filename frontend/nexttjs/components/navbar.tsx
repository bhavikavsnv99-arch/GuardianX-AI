"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/5
      bg-[#06070A]/70
      backdrop-blur-2xl
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
      ">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Guardian
          <span className="text-violet-400">
            X
          </span>
        </Link>

        {/* Navigation */}
        <nav className="
          hidden
          md:flex
          items-center
          gap-10
          text-sm
          text-slate-300
        ">

          <Link
            href="/"
            className="hover:text-white transition-all"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="hover:text-white transition-all"
          >
            Dashboard
          </Link>

          <Link
            href="/chat"
            className="hover:text-white transition-all"
          >
            AI Chat
          </Link>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="
              text-sm
              text-slate-300
              hover:text-white
              transition-all
            "
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="
              px-5
              py-3
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(124,58,237,0.35)]
            "
          >
            Get Started
          </Link>

        </div>

      </div>

    </header>
  );
}