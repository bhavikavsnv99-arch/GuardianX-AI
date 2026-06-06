"use client";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

import Link from "next/link";
import Sidebar from "@/components/GuardianSidebar";

import {
  AlertTriangle,
  ShieldAlert,
  Ambulance,
  MessageCircle,
  MapPinned,
  Bell,
  User,
  FileWarning,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardPage() {
  const emergencyData = [
    { name: "Fire", cases: 12 },
    { name: "Medical", cases: 10 },
    { name: "Accident", cases: 8 },
    { name: "Threat", cases: 6 },
  ];

  const severityData = [
    { name: "Critical", value: 10 },
    { name: "Medium", value: 7 },
    { name: "Low", value: 5 },
  ];

  const COLORS = ["#06b6d4", "#f59e0b", "#22c55e"];

  const alerts = [
    {
      title: "Fire Emergency",
      location: "School Building",
      status: "Critical",
    },
    {
      title: "Road Accident",
      location: "Highway Area",
      status: "Medium",
    },
    {
      title: "Personal Threat",
      location: "Market Area",
      status: "Critical",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Emergency{" "}
            <span className="text-cyan-400">
              Command Center
            </span>
          </h1>

          <p className="mt-3 text-slate-400 text-lg">
            Real-time emergency monitoring and AI assisted response management.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  Total Alerts
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  28
                </h2>
              </div>

              <AlertTriangle
                size={40}
                className="text-red-400"
              />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  Active Emergencies
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  12
                </h2>
              </div>

              <ShieldAlert
                size={40}
                className="text-cyan-400"
              />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  AI Warnings
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  7
                </h2>
              </div>

              <Bell
                size={40}
                className="text-yellow-400"
              />
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">
                  Ambulance Requests
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  5
                </h2>
              </div>

              <Ambulance
                size={40}
                className="text-green-400"
              />
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

            <Link
              href="/chat"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <MessageCircle
                className="text-cyan-400 mb-4"
                size={36}
              />

              <h3 className="font-semibold text-lg">
                AI Chat
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Talk with the AI assistant
              </p>
            </Link>

            <Link
              href="/map"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-400 transition"
            >
              <MapPinned
                className="text-green-400 mb-4"
                size={36}
              />

              <h3 className="font-semibold text-lg">
                Emergency Map
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                View emergency locations
              </p>
            </Link>

            <Link
              href="/notifications"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-yellow-400 transition"
            >
              <Bell
                className="text-yellow-400 mb-4"
                size={36}
              />

              <h3 className="font-semibold text-lg">
                Notifications
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Live emergency alerts
              </p>
            </Link>

            <Link
              href="/report"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-400 transition"
            >
              <FileWarning
                className="text-red-400 mb-4"
                size={36}
              />

              <h3 className="font-semibold text-lg">
                Reports
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Submit incident reports
              </p>
            </Link>

            <Link
              href="/profile"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-400 transition"
            >
              <User
                className="text-purple-400 mb-4"
                size={36}
              />

              <h3 className="font-semibold text-lg">
                Profile
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Manage your account
              </p>
            </Link>

          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
              Emergency Analytics
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={emergencyData}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar
                  dataKey="cases"
                  fill="#06b6d4"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-6">
              Severity Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={severityData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {severityData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Recent Alerts */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Incidents
          </h2>

          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-800 rounded-xl p-5"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {alert.title}
                  </h3>

                  <p className="text-slate-400">
                    {alert.location}
                  </p>
                </div>

                <span
                  className={`mt-3 md:mt-0 px-4 py-2 rounded-full text-sm font-semibold ${
                    alert.status === "Critical"
                      ? "bg-red-500"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}