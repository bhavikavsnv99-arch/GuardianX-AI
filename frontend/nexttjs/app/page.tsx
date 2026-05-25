export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold text-red-500">
        GuardianX-AI
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        AI Emergency & Safety Assistant
      </p>

      <button className="mt-8 bg-red-500 px-6 py-3 rounded-xl hover:bg-red-700">
        Report Emergency
      </button>

    </div>
  );
}