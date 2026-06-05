"use client";

import Link from "next/link";
import {
  Home,
  LayoutDashboard,
  MessageCircle,
  MapPinned,
  Bell,
  User,
  FileWarning,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-white">
          Guardian<span className="text-cyan-400">X</span>
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Emergency Response Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6">

        <div className="space-y-3">

          <Link
            href="/"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <Home size={22} />
            Home
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <LayoutDashboard size={22} />
            Dashboard
          </Link>

          <Link
            href="/chat"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <MessageCircle size={22} />
            AI Chat
          </Link>

          <Link
            href="/map"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <MapPinned size={22} />
            Emergency Map
          </Link>

          <Link
            href="/notifications"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <Bell size={22} />
            Notifications
          </Link>

          <Link
            href="/report"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <FileWarning size={22} />
            Reports
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition"
          >
            <User size={22} />
            Profile
          </Link>

        </div>

      </nav>

      {/* Bottom User Card */}
      <div className="p-6 border-t border-slate-800">
        <div className="rounded-2xl bg-slate-800 p-4">
          <h3 className="font-semibold text-white">
            Emergency Operator
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            Active Monitoring Session
          </p>
        </div>
      </div>

    </aside>
  );
}