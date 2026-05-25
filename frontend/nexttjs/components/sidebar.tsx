import Link from "next/link";

import {
  Home,
  LayoutDashboard,
  AlertTriangle,
  LogIn,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold text-red-500 mb-10">
        GuardianX
      </h1>

      <div className="flex flex-col gap-8 text-lg">

        <Link href="/" className="flex items-center gap-3 hover:text-red-400">
          <Home />
          Home
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:text-red-400"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          href="/emergency"
          className="flex items-center gap-3 hover:text-red-400"
        >
          <AlertTriangle />
          Emergency
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-3 hover:text-red-400"
        >
          <LogIn />
          Login
        </Link>

      </div>

    </div>
  );
}