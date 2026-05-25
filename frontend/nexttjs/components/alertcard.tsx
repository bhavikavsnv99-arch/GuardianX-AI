"use client";

import { motion } from "framer-motion";

type AlertProps = {
  type: string;
  location: string;
  severity: string;
};

export default function AlertCard({
  type,
  location,
  severity,
}: AlertProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg"
    >

      <h2 className="text-2xl font-bold mb-4">
        {type}
      </h2>

      <p className="text-gray-300">
        Location: {location}
      </p>

      <p className="mt-2">
        Severity:
        <span className="text-red-400 font-bold ml-2">
          {severity}
        </span>
      </p>

      <button className="mt-6 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-700">
        View Details
      </button>

    </motion.div>
  );
}