// src/components/layout/SiteShell.tsx

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#02040A] text-white">
        {/* Main background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_28%),linear-gradient(180deg,#02040A_0%,#020617_45%,#01030A_100%)]" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />

        {/* Center glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Page content */}
        <div className="relative z-10">{children}</div>
      </main>

      <Footer />
    </>
  );
}