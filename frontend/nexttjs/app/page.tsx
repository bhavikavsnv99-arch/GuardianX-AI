import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            Guardian<span className="text-cyan-400">X</span> AI
          </h1>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">

          <div className="inline-block mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            AI Powered Emergency Response Platform
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Smart Emergency
            <br />
            Response With
            <span className="text-cyan-400"> AI</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-400">
            Monitor incidents, analyze emergencies, visualize locations,
            generate reports and receive AI-powered guidance through a
            unified response platform.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/signup"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Start Monitoring
            </Link>

            <Link
              href="/login"
              className="border border-slate-700 hover:bg-slate-800 transition px-8 py-4 rounded-xl font-semibold"
            >
              Login Dashboard
            </Link>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>
            <p className="mt-2 text-slate-400">
              Monitoring
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">98%</h3>
            <p className="mt-2 text-slate-400">
              AI Accuracy
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
            <p className="mt-2 text-slate-400">
              Alerts Processed
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">Fast</h3>
            <p className="mt-2 text-slate-400">
              Response Support
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-28">

        <h2 className="text-4xl font-bold text-center mb-16">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              AI Assistant
            </h3>

            <p className="text-slate-400">
              Analyze incidents and receive intelligent emergency guidance.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              Live Mapping
            </h3>

            <p className="text-slate-400">
              Track emergency locations and visualize incidents.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              Smart Reports
            </h3>

            <p className="text-slate-400">
              Generate detailed reports with AI-powered insights.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl font-semibold mb-4">
              Emergency Alerts
            </h3>

            <p className="text-slate-400">
              Receive notifications and response recommendations.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        GuardianX AI • Emergency Response & Safety Monitoring Platform
      </footer>

    </main>
  );
}