// src/content/results.ts

export const resultsContent = {
  eyebrow: "Results",
  title: "Results that matter.",
  description:
    "TrackerMed turns billing activity into measurable insight, allowing practices to put their working capital to better use overall. Most practices see an immediate 7% increase in receipts in the first 90 days with us.",
} as const;

export const resultMetrics = [
  {
    label: "Receipt Increase",
    value: "7%",
    description:
      "Most practices see an immediate increase in receipts in the first 90 days with TrackerMed.",
    trend: "First 90 days",
  },
  {
    label: "Collection Rate",
    value: "92.7%",
    description: "Improved revenue capture through cleaner billing workflows.",
    trend: "+4.3%",
  },
  {
    label: "Days in A/R",
    value: "12",
    description: "Shorter reimbursement cycles and stronger cash visibility.",
    trend: "-6 days",
  },
  {
    label: "Denial Rate",
    value: "2.8%",
    description: "Reduced claim friction through structured follow-up.",
    trend: "-2.1%",
  },
] as const;