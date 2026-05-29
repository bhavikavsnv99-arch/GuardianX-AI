"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(
  () => import("../../components/MapComponent"),
  {
    ssr: false,
  }
);

export default function MapPage() {

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-red-950 text-white p-8">

      <h1 className="text-5xl font-bold text-red-500 mb-6">
        Emergency Map
      </h1>

      <p className="text-gray-400 mb-8">
        Nearby emergency services and live locations
      </p>

      <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">

        <MapComponent />

      </div>

    </div>
  );
}