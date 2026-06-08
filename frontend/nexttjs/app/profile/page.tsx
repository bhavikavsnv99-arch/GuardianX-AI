"use client";

import { useEffect, useState } from "react";
import { User, Mail } from "lucide-react";

export default function ProfilePage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {

      const user =
        JSON.parse(storedUser);

      setName(user.name || "");
      setEmail(user.email || "");
    }

  }, []);

  return (

    <div className="min-h-screen bg-[#06070A] text-white p-8">

      <h1 className="text-5xl font-bold mb-3">
        Profile
      </h1>

      <p className="text-slate-400 mb-10">
        Manage your GuardianX account
      </p>

      <div
        className="
          max-w-2xl
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-8
        "
      >

        <div className="flex justify-center mb-8">

          <div
            className="
              w-24
              h-24
              rounded-full
              bg-violet-500/20
              flex
              items-center
              justify-center
            "
          >
            <User size={40} />
          </div>

        </div>

        <div className="space-y-6">

          <div>

            <label className="text-slate-400 text-sm">
              Full Name
            </label>

            <div
              className="
                mt-2
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                bg-[#0F172A]
              "
            >

              <User size={18} />

              {name || "No Name"}

            </div>

          </div>

          <div>

            <label className="text-slate-400 text-sm">
              Email Address
            </label>

            <div
              className="
                mt-2
                flex
                items-center
                gap-3
                p-4
                rounded-xl
                bg-[#0F172A]
              "
            >

              <Mail size={18} />

              {email || "No Email"}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}