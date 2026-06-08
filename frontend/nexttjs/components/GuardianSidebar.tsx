"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  LayoutDashboard,
  MessageCircle,
  Bell,
  Shield,
  User,
  MapPinned,
  LogOut,
} from "lucide-react";

export default function GuardianSidebar() {

  const router = useRouter();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");

  };

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-[#0B0F17]
        border-r
        border-white/5
        p-8
        hidden
        lg:flex
        flex-col
        justify-between
      "
    >

      <div>

        {/* Logo */}
        <div>

          <h1
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Guardian
            <span className="text-violet-400">
              X
            </span>
          </h1>

          <p
            className="
              text-slate-500
              text-sm
              mt-3
            "
          >
            AI Emergency Platform
          </p>

        </div>

        {/* Navigation */}
        <nav
          className="
            mt-14
            flex
            flex-col
            gap-3
          "
        >

          {[
            {
              icon: LayoutDashboard,
              title: "Dashboard",
              href: "/dashboard",
            },
            {
              icon: MessageCircle,
              title: "AI Chat",
              href: "/chat",
            },
            {
              icon: MapPinned,
              title: "Emergency Map",
              href: "/map",
            },
            {
              icon: Bell,
              title: "History",
              href: "/history",
            },
            {
              icon: Bell,
              title: "Notifications",
              href: "/notifications",
            },
            {
              icon: Shield,
              title: "Threat Center",
              href: "/threats",
            },
            {
              icon: User,
              title: "Profile",
              href: "/profile",
            },
          ].map((item, index) => (

            <Link
              key={index}
              href={item.href}
              className="
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                text-slate-400
                hover:bg-white/[0.04]
                hover:text-white
                transition-all
              "
            >

              <item.icon size={20} />

              {item.title}

            </Link>

          ))}

        </nav>

      </div>

      {/* Bottom Section */}
      <div className="space-y-4">

        {/* Status Card */}
        <div
          className="
            rounded-3xl
            border
            border-white/5
            bg-white/[0.03]
            p-6
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                w-3
                h-3
                rounded-full
                bg-green-400
              "
            />

            <p className="text-sm text-slate-300">
              AI Systems Online
            </p>

          </div>

          <p
            className="
              text-sm
              text-slate-500
              mt-4
              leading-7
            "
          >
            All emergency monitoring systems are active and operational.
          </p>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            px-5
            py-4
            rounded-2xl
            bg-red-500/10
            border
            border-red-500/20
            text-red-400
            hover:bg-red-500/20
            transition-all
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}