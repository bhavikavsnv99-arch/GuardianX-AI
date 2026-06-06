"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/image/bg.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/20" />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_85%)]" />

      {/* Aurora Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-violet-600/20 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full animate-pulse" />

    </div>
  );
}