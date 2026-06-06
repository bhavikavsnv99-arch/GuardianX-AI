"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Shield,
  Brain,
  MapPinned,
  Siren,
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import RadioWaves from "@/components/RadioWaves";
import FloatingParticles from "@/components/FloatingParticles";

export default function HomePage() {
  return (
    <main className="bg-[#06070A] text-white overflow-hidden">

  {/* BACKGROUND SYSTEM */}
       <AnimatedBackground /> 
 <FloatingParticles /> 

      {/* HERO */}
     <section className="min-h-screen flex items-center justify-center px-6 relative">

          {/* CENTER EFFECT */}
           <RadioWaves /> 

       

        <div className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-24
          items-center
          w-full
          relative
          z-10
        ">

         {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
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
              "
            >

              <div
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-violet-400
                  animate-pulse
                "
              />

              Enterprise AI Emergency Platform

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                mt-10
                text-6xl
                md:text-7xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
              "
            >

             GuardianX AI
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-400
                  to-blue-400
                  text-transparent
                  bg-clip-text
                "
              >
                Emergency Intelligence
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="
                mt-8
                text-lg
                leading-8
                text-slate-400
                max-w-xl
              "
            >
              GuardianX transforms emergency response with AI-driven
              incident analysis, real-time monitoring, predictive alerts,
              and operational command systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/signup"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-blue-600
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
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
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

            flex
            items-center
            justify-center
          "
                >
                  Explore Platform
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

                    {/* RIGHT */}
                    {/* RIGHT */}
          <motion.div
            className="relative"
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
          >
                    <motion.div
            whileHover={{
              scale: 1.015,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
            className="
              rounded-[36px]
              bg-white/[0.04]
              border
              border-white/10
              backdrop-blur-2xl
              p-8
              shadow-[0_0_80px_rgba(124,58,237,0.15)]
            "
          >

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

                  <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 1 + index * 0.2,
                        duration: 0.5,
                      }}
                      whileHover={{
                        scale: 1.02,
                        x: 8,
                      }}
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

                  </motion.div>

                ))}

              </div>

            </motion.div>

         </motion.div>

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