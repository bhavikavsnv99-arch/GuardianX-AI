import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "GuardianX AI",
  description: "AI Emergency Response Platform",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-[#020617] text-white">

        {/* Background Glow Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">

          <div
            className="
              absolute
              top-[-200px]
              left-[-100px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-cyan-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-[-200px]
              right-[-100px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-violet-500/10
              blur-3xl
            "
          />

        </div>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #1e293b",
            },
          }}
        />

        {children}

      </body>

    </html>
  );
}