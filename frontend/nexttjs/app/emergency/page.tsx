"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function EmergencyPage() {

  const [emergencyType, setEmergencyType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("Low");

  const handleSubmit = () => {

  console.log({
    emergencyType,
    description,
    location,
    severity,
  });

  toast.loading("Submitting Emergency...");

  setTimeout(() => {

    toast.success("Emergency Submitted Successfully");

  }, 2000);

};

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-4xl font-bold text-red-500 mb-8">
        Emergency Report
      </h1>

      <div className="flex flex-col gap-6 max-w-xl">

        <input
          type="text"
          placeholder="Emergency type"
          className="p-4 rounded-lg bg-gray-800"
          onChange={(e) => setEmergencyType(e.target.value)}
        />

        <textarea
          placeholder="Describe situation"
          className="p-4 rounded-lg bg-gray-800 h-40"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="p-4 rounded-lg bg-gray-800"
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="p-4 rounded-lg bg-gray-800"
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-red-500 p-4 rounded-xl hover:bg-red-700"
        >
          Submit Emergency
        </button>

      </div>

    </div>
  );
}