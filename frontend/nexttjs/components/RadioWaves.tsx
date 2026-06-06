"use client";

export default function RadioWaves() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {/* Wave 1 */}
      <div className="absolute w-[400px] h-[400px] rounded-full border border-violet-400/10 animate-[ping_3s_infinite]" />

      {/* Wave 2 */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-400/10 animate-[ping_4s_infinite]" />

      {/* Wave 3 */}
      <div className="absolute w-[800px] h-[800px] rounded-full border border-cyan-400/5 animate-[ping_6s_infinite]" />

    </div>
  );
}