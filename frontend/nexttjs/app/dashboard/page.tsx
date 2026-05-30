"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar";
import AlertCard from "../../components/alertcard";
import AIResponseBox from "../../components/airesponsebox";
import LoadingSpinner from "../../components/loadingspinner";
import StatsCard from "../../components/statscard";

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);

  const alerts = [
    {
      id: 1,
      type: "Fire Emergency",
      location: "Mumbai",
      severity: "High",
    },
    {
      id: 2,
      type: "Road Accident",
      location: "Delhi",
      severity: "Medium",
    },
    {
      id: 3,
      type: "Medical Help",
      location: "Pune",
      severity: "Low",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white min-h-screen">

      <Sidebar />
{/* <<<<<<< HEAD

=======
>>>>>>> 50a29a7e2f057090e29b51fd9911922785291512 */}
      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold text-red-500 mb-10">
          Emergency Dashboard
        </h1>

        {loading ? (

          <LoadingSpinner />

        ) : (

          <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

              <StatsCard
                title="Total Emergencies"
                value="120"
              />

              <StatsCard
                title="Active Alerts"
                value="32"
              />

              <StatsCard
                title="Resolved Cases"
                value="88"
              />

              <StatsCard
                title="AI Responses"
                value="540"
              />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {alerts.map((alert) => (
                <AlertCard
                  key={alert.id}
                  type={alert.type}
                  location={alert.location}
                  severity={alert.severity}
                />
              ))}

            </div>

            <AIResponseBox
              response="
              High-risk fire emergency detected.
              Immediate evacuation recommended.
              Nearby emergency services alerted.
              "
            />

          </>

        )}

      </div>

    </div>
  );
}