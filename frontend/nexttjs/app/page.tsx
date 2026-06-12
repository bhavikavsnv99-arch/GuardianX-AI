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
  <main className="relative z-10 text-white overflow-hidden">

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
  flex
  justify-center
  items-center
  w-full
  relative
  z-10
">

       {/* LEFT */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    flex
    flex-col
    items-center
    text-center
    mx-auto
    max-w-4xl
  "
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
      text-4xl
      md:text-5xl
      font-bold
      leading-[1.05]
      tracking-[-0.04em]
    "
  >

    AI Powered
    <br />

    <span
      className="
        bg-gradient-to-r
        from-violet-400
        to-red-400
        text-transparent
        bg-clip-text
      "
    >
      Emergency & Safety Analyser 
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
      max-w-2xl
      mx-auto
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
    className="
      mt-12
      flex
      flex-wrap
      gap-5
      justify-center
    "
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