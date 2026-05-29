"use client";

import { useState } from "react";

import {
  AlertTriangle,
  MapPin,
  Upload,
} from "lucide-react";

export default function ReportPage() {

  const [description, setDescription] = useState("");

  const [location, setLocation] = useState("");

  const [severity, setSeverity] = useState("Medium");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    setLoading(true);

    setTimeout(() => {

      alert("Emergency Report Submitted!");

      setLoading(false);

    }, 2000);

  };

  return (

    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-red-950 text-white p-8">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold text-red-500">
          Emergency Report
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Report dangerous situations instantly
        </p>

      </div>

      {/* Form */}
      <div className="
        max-w-3xl
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-8
        shadow-2xl
      ">

        {/* Description */}
        <div className="mb-6">

          <label className="text-lg font-semibold">
            Emergency Description
          </label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Describe the emergency..."
            className="
              w-full
              mt-3
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              focus:outline-none
              focus:border-red-500
              h-40
            "
          />

        </div>

        {/* Location */}
        <div className="mb-6">

          <label className="text-lg font-semibold flex items-center gap-2">

            <MapPin size={20} />

            Location

          </label>

          <input
            type="text"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            placeholder="Enter emergency location"
            className="
              w-full
              mt-3
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              focus:outline-none
              focus:border-red-500
            "
          />

        </div>

        {/* Severity */}
        <div className="mb-6">

          <label className="text-lg font-semibold flex items-center gap-2">

            <AlertTriangle size={20} />

            Severity Level

          </label>

          <select
            value={severity}
            onChange={(e) =>
              setSeverity(e.target.value)
            }
            className="
              w-full
              mt-3
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
              focus:outline-none
              focus:border-red-500
            "
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>

          </select>

        </div>

        {/* Upload */}
        <div className="mb-8">

          <label className="text-lg font-semibold flex items-center gap-2">

            <Upload size={20} />

            Upload Evidence

          </label>

          <input
            type="file"
            className="
              w-full
              mt-3
              p-4
              rounded-2xl
              bg-gray-800
              border
              border-gray-700
            "
          />

        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="
            w-full
            bg-red-500
            hover:bg-red-600
            transition-all
            p-4
            rounded-2xl
            text-xl
            font-bold
          "
        >

          {loading
            ? "Submitting..."
            : "Submit Emergency Report"}

        </button>

      </div>

    </div>
  );
}