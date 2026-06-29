// src/app/layout.tsx

import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";

import SiteShell from "@/components/layout/SiteShell";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrackerMed | Revenue Cycle Management",
  description:
    "TrackerMed provides medical billing, claims tracking, denial management, and revenue cycle support for modern healthcare practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#02040A] text-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
