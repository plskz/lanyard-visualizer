import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Noise } from "@/components/ui/background-noise";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lanyard Visualizer",
  description: "Display your Discord status online using Lanyard API",
  icons: [
    {
      rel: "icon",
      url:
        process.env.NODE_ENV === "production"
          ? "/favicon.ico"
          : "/favicon-dev.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden antialiased`}>
        {children}
        <Noise />

        {/* vercel */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
