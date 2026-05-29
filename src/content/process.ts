// src/content/process.ts

export const processSteps = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "We learn the practice structure, current billing workflow, payer mix, and the biggest revenue cycle pain points.",
  },
  {
    number: "02",
    title: "Intake",
    description:
      "Patient, eligibility, insurance, and visit information is reviewed so claims start with cleaner data.",
  },
  {
    number: "03",
    title: "Chart Review",
    description:
      "Charts are reviewed for accuracy, completeness, documentation gaps, and claim readiness before submission.",
  },
  {
    number: "04",
    title: "Claim Submission",
    description:
      "Claims are prepared, checked, and submitted with a focus on accuracy, timing, and payer requirements.",
  },
  {
    number: "05",
    title: "Tracking + Follow Up",
    description:
      "Submitted claims are monitored for delays, denials, missing information, payer responses, and next actions.",
  },
  {
    number: "06",
    title: "Goals + Performance",
    description:
      "Performance goals, denial trends, reimbursement activity, and productivity benchmarks are reviewed consistently.",
  },
  {
    number: "07",
    title: "Transparency",
    description:
      "Your team gets clearer visibility into what is happening across claims, payments, denials, and revenue operations.",
  },
] as const;