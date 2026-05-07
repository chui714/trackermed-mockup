// src/components/sections/hero/HeroDashboard.tsx

"use client";

import {
  Activity,
  CircleDollarSign,
  FileCheck2,
  Timer,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const metrics = [
  {
    label: "Collection Rate",
    value: "92.7%",
    trend: "↑ 4.3%",
    caption: "vs last month",
    icon: TrendingUp,
    accent: "text-cyan-300",
  },
  {
    label: "Days in A/R",
    value: "28",
    trend: "↓ 6 days",
    caption: "faster cycle",
    icon: Timer,
    accent: "text-sky-300",
  },
  {
    label: "Claims Submitted",
    value: "4,782",
    trend: "↑ 18.6%",
    caption: "this month",
    icon: FileCheck2,
    accent: "text-blue-300",
  },
  {
    label: "Denial Rate",
    value: "7.3%",
    trend: "↓ 2.1%",
    caption: "improved",
    icon: TrendingDown,
    accent: "text-emerald-300",
  },
];

const claimStatus = [
  { label: "Clean Claims", value: "83%", width: "83%" },
  { label: "Pending Review", value: "9%", width: "38%" },
  { label: "Denied", value: "8%", width: "30%" },
];

const chartBars = [38, 52, 46, 64, 58, 78, 72, 92, 86, 104, 96, 120];

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative hidden w-full max-w-[620px] justify-self-end lg:block"
    >
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

      {/* Main Dashboard */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        {/* Inner grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

        <div className="relative">
          {/* Dashboard Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                  <Activity className="h-4 w-4" />
                </div>

                <p className="text-sm font-semibold text-white">
                  Revenue Cycle Overview
                </p>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                TrackerMed performance snapshot
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-slate-300">
              This Month
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-black/35 p-3.5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400">{metric.label}</p>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Icon className={`h-4 w-4 ${metric.accent}`} />
                    </div>
                  </div>

                  <p className={`mt-2 text-2xl font-semibold ${metric.accent}`}>
                    {metric.value}
                  </p>

                  <p className="mt-1 text-xs text-emerald-300">
                    {metric.trend}{" "}
                    <span className="text-slate-500">{metric.caption}</span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">
                  Revenue Overview
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Billed vs collected activity
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Jan — Jun
              </div>
            </div>

            <div className="flex h-32 items-end gap-3">
              {chartBars.map((height, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-end rounded-full bg-white/[0.03]"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height }}
                    transition={{
                      duration: 0.75,
                      delay: 0.35 + index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full rounded-full bg-gradient-to-t from-blue-600 via-sky-400 to-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Claim Status</p>
                <FileCheck2 className="h-4 w-4 text-cyan-300" />
              </div>

              <div className="space-y-4">
                {claimStatus.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{item.label}</span>
                      <span className="text-slate-200">{item.value}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-black">
                <CircleDollarSign className="h-5 w-5" />
              </div>

              <p className="mt-5 text-sm text-slate-300">Projected Recovery</p>

              <p className="mt-2 text-3xl font-semibold text-white">$84.2K</p>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Estimated recoverable revenue from follow-ups and denial
                resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}