import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mt-10">
        GuardianX AI
      </h1>

      <p className="mt-4">
        AI Emergency & Safety Assistant
      </p>

      <button className="bg-red-500 text-white px-5 py-3 rounded mt-6">
        Send Emergency Alert
      </button>
    </div>
  );
}