import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Brain,
  MapPinned,
  Siren,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-[#4b5163] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="
          absolute
          top-[-250px]
          left-[-250px]
          w-[700px]
          h-[700px]
          bg-violet-600/20
          blur-[180px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-[-250px]
          right-[-250px]
          w-[700px]
          h-[700px]
          bg-blue-600/20
          blur-[180px]
          rounded-full
        " />

      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6">

        <div className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-24
          items-center
          w-full
        ">

          {/* LEFT */}
          <div>

            <div className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              bg-white/5
              border
              border-white/10
              text-sm
              text-slate-300
              backdrop-blur-xl
            ">

              <div className="
                w-2
                h-2
                rounded-full
                bg-violet-400
                animate-pulse
              " />

              Enterprise AI Emergency Platform

            </div>

            <h1 className="
              mt-10
              text-6xl
              md:text-7xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
            ">

              Intelligent
              <br />

              <span className="
                bg-gradient-to-r
                from-violet-400
                to-blue-400
                text-transparent
                bg-clip-text
              ">
                Emergency Intelligence
              </span>

            </h1>

            <p className="
              mt-8
              text-lg
              leading-8
              text-slate-400
              max-w-xl
            ">
              GuardianX transforms emergency response with AI-driven
              incident analysis, real-time monitoring, predictive alerts,
              and operational command systems.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/signup"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-blue-600
                  hover:scale-105
                  transition-all
                  duration-300
                  font-medium
                  flex
                  items-center
                  gap-2
                  shadow-[0_0_40px_rgba(124,58,237,0.35)]
                "
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/dashboard"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition-all
                  backdrop-blur-xl
                "
              >
                Explore Platform
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="
              rounded-[36px]
              bg-white/[0.04]
              border
              border-white/10
              backdrop-blur-2xl
              p-8
              shadow-[0_0_80px_rgba(124,58,237,0.15)]
            ">

              <div className="flex items-center justify-between mb-8">

                <div>

                  <p className="text-sm text-slate-400">
                    Live Operations
                  </p>

                  <h2 className="text-2xl font-semibold mt-2">
                    Emergency Monitoring
                  </h2>

                </div>

                <div className="
                  px-4
                  py-2
                  rounded-full
                  bg-violet-500/10
                  border
                  border-violet-500/20
                  text-violet-300
                  text-sm
                ">
                  ACTIVE
                </div>

              </div>

              <div className="space-y-5">

                {[
                  {
                    title: "Fire Emergency",
                    location: "Industrial Zone",
                  },
                  {
                    title: "Medical Response",
                    location: "Metro Hospital",
                  },
                  {
                    title: "Threat Detection",
                    location: "Central District",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      rounded-2xl
                      bg-[#0F172A]/70
                      border
                      border-white/5
                      p-5
                      flex
                      items-center
                      justify-between
                      hover:border-violet-500/30
                      transition-all
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="
                        w-3
                        h-3
                        rounded-full
                        bg-gradient-to-r
                        from-violet-400
                        to-blue-400
                      " />

                      <div>

                        <h3 className="font-medium">
                          {item.title}
                        </h3>

                        <p className="text-sm text-slate-400 mt-1">
                          {item.location}
                        </p>

                      </div>

                    </div>

                    <span className="text-xs text-slate-500">
                      LIVE
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24">

            <p className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-violet-400
            ">
              PLATFORM CAPABILITIES
            </p>

            <h2 className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
            ">
              Advanced AI Response Infrastructure
            </h2>

          </div>

          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {[
              {
                icon: Brain,
                title: "AI Analysis",
                desc: "Autonomous emergency understanding and response generation.",
              },
              {
                icon: Shield,
                title: "Threat Intelligence",
                desc: "Continuous safety surveillance powered by AI systems.",
              },
              {
                icon: MapPinned,
                title: "Smart Mapping",
                desc: "Live emergency routing and intelligent geospatial monitoring.",
              },
              {
                icon: Siren,
                title: "Rapid Alerts",
                desc: "Mission-critical emergency notifications in real-time.",
              },
            ].map((feature, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-[28px]
                  bg-white/[0.03]
                  border
                  border-white/10
                  p-8
                  backdrop-blur-2xl
                  hover:border-violet-500/30
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-600
                  to-blue-600
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_40px_rgba(124,58,237,0.25)]
                ">

                  <feature.icon size={28} />

                </div>

                <h3 className="
                  mt-8
                  text-2xl
                  font-semibold
                ">
                  {feature.title}
                </h3>

                <p className="
                  mt-5
                  text-slate-400
                  leading-8
                ">
                  {feature.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}