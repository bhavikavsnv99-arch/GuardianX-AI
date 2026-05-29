"use client";

import Link from "next/link";

import {
  AlertTriangle,
  ShieldAlert,
  Ambulance,
  Flame,
  MessageCircle,
  MapPinned,
  Bell,
  User,
  FileWarning,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardPage() {

  const alerts = [
    {
      title: "Fire Emergency",
      location: "School Building",
      status: "High",
    },
    {
      title: "Road Accident",
      location: "Highway Area",
      status: "Medium",
    },
    {
      title: "Personal Threat",
      location: "Market Area",
      status: "High",
    },
  ];

  // Bar Chart Data
  const emergencyData = [
    { name: "Fire", cases: 12 },
    { name: "Accident", cases: 8 },
    { name: "Threat", cases: 6 },
    { name: "Medical", cases: 10 },
  ];

  // Pie Chart Data
  const pieData = [
    { name: "High", value: 10 },
    { name: "Medium", value: 7 },
    { name: "Low", value: 5 },
  ];

  const COLORS = [
    "#ef4444",
    "#facc15",
    "#22c55e",
  ];

  return (

    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-red-950 text-white p-8">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold text-red-500">
          GuardianX Dashboard
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          AI Emergency & Safety Monitoring System
        </p>

      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        {/* Total Alerts */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Total Alerts
              </p>

              <h2 className="text-4xl font-bold mt-2">
                28
              </h2>

            </div>

            <AlertTriangle
              className="text-red-500"
              size={50}
            />

          </div>

        </div>

        {/* Active Emergencies */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Active Emergencies
              </p>

              <h2 className="text-4xl font-bold mt-2">
                12
              </h2>

            </div>

            <Flame
              className="text-orange-500"
              size={50}
            />

          </div>

        </div>

        {/* AI Warnings */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                AI Warnings
              </p>

              <h2 className="text-4xl font-bold mt-2">
                7
              </h2>

            </div>

            <ShieldAlert
              className="text-yellow-500"
              size={50}
            />

          </div>

        </div>

        {/* Ambulance Requests */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl shadow-2xl hover:scale-105 transition-all">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400">
                Ambulance Requests
              </p>

              <h2 className="text-4xl font-bold mt-2">
                5
              </h2>

            </div>

            <Ambulance
              className="text-green-500"
              size={50}
            />

          </div>

        </div>

      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">

        {/* AI Chat */}
        <Link href="/chat">

          <div className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            shadow-2xl
            hover:border-blue-500
            hover:scale-105
            transition-all
            cursor-pointer
          ">

            <div className="flex flex-col items-center text-center gap-4">

              <MessageCircle
                className="text-blue-400"
                size={50}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  AI Chat
                </h2>

                <p className="text-gray-400 mt-2">
                  Talk with AI assistant
                </p>

              </div>

            </div>

          </div>

        </Link>

        {/* Emergency Map */}
        <Link href="/map">

          <div className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            shadow-2xl
            hover:border-green-500
            hover:scale-105
            transition-all
            cursor-pointer
          ">

            <div className="flex flex-col items-center text-center gap-4">

              <MapPinned
                className="text-green-400"
                size={50}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Emergency Map
                </h2>

                <p className="text-gray-400 mt-2">
                  Nearby emergency services
                </p>

              </div>

            </div>

          </div>

        </Link>

        {/* Notifications */}
        <Link href="/notifications">

          <div className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            shadow-2xl
            hover:border-yellow-500
            hover:scale-105
            transition-all
            cursor-pointer
          ">

            <div className="flex flex-col items-center text-center gap-4">

              <Bell
                className="text-yellow-400"
                size={50}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Notifications
                </h2>

                <p className="text-gray-400 mt-2">
                  Live emergency alerts
                </p>

              </div>

            </div>

          </div>

        </Link>

        {/* Profile */}
        <Link href="/profile">

          <div className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            shadow-2xl
            hover:border-purple-500
            hover:scale-105
            transition-all
            cursor-pointer
          ">

            <div className="flex flex-col items-center text-center gap-4">

              <User
                className="text-purple-400"
                size={50}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Profile
                </h2>

                <p className="text-gray-400 mt-2">
                  Manage account settings
                </p>

              </div>

            </div>

          </div>

        </Link>

        {/* Report Emergency */}
        <Link href="/report">

          <div className="
            bg-gray-900
            border
            border-gray-800
            rounded-3xl
            p-8
            shadow-2xl
            hover:border-red-500
            hover:scale-105
            transition-all
            cursor-pointer
          ">

            <div className="flex flex-col items-center text-center gap-4">

              <FileWarning
                className="text-red-400"
                size={50}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  Report
                </h2>

                <p className="text-gray-400 mt-2">
                  Submit emergency reports
                </p>

              </div>

            </div>

          </div>

        </Link>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        {/* Bar Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Emergency Analytics
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={emergencyData}>

              <XAxis
                dataKey="name"
                stroke="#ffffff"
              />

              <YAxis stroke="#ffffff" />

              <Tooltip />

              <Bar
                dataKey="cases"
                fill="#ef4444"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Severity Levels
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {pieData.map((entry, index) => (

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
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-red-500 mb-8">
          Recent Emergency Alerts
        </h2>

        <div className="space-y-6">

          {alerts.map((alert, index) => (

            <div
              key={index}
              className="
                bg-gray-800
                border
                border-gray-700
                p-6
                rounded-2xl
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                hover:border-red-500
                transition-all
              "
            >

              <div>

                <h3 className="text-2xl font-semibold">
                  {alert.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  Location: {alert.location}
                </p>

              </div>

              <div className="mt-4 md:mt-0">

                <span
                  className={`
                    px-5
                    py-2
                    rounded-full
                    font-bold
                    ${
                      alert.status === "High"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }
                  `}
                >
                  {alert.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}