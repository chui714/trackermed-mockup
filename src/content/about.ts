// src/content/about.ts

export const aboutPageHero = {
  eyebrow: "About TrackerMed",
  title: "Medical billing support built around clarity and follow-through.",
  description:
    "TrackerMed helps healthcare practices improve visibility across claims, denials, follow-up, and revenue cycle operations with a practical, structured approach.",
} as const;

export const aboutIntro = {
  eyebrow: "Practice-First Billing Support",
  title: "Built for practices that need more than claim submission.",
  description:
    "Medical billing is not only about sending claims. Practices need visibility into what is pending, what is denied, what needs follow-up, and where the workflow is creating friction. TrackerMed is positioned to support that clarity.",
} as const;

export const aboutHighlights = [
  {
    value: "Focused",
    label:
      "Built specifically around billing clarity, claim follow-up, and practice revenue operations.",
  },
  {
    value: "Transparent",
    label:
      "Designed to give practices better visibility into what is submitted, pending, denied, and paid.",
  },
  {
    value: "Reliable",
    label:
      "A structured process for reducing billing friction and supporting stronger financial outcomes.",
  },
] as const;

export const aboutBullets = [
  "Medical billing support built around visibility, not confusion.",
  "Clearer claim tracking from submission to reimbursement.",
  "Denial management and follow-up handled with structure.",
  "A premium partner experience for modern healthcare practices.",
] as const;

export const aboutPrinciples = [
  {
    title: "Clarity before complexity",
    description:
      "Practices should be able to understand where claims stand, what needs attention, and what actions are being taken.",
  },
  {
    title: "Support that fits the practice",
    description:
      "TrackerMed’s positioning is not about forcing every practice into the same model. The focus is on practical support where it matters.",
  },
  {
    title: "Follow-through matters",
    description:
      "Revenue cycle support is strongest when claims, denials, and open issues are tracked with consistency and accountability.",
  },
] as const;

export const aboutAvoids = [
  "Unclear claim status",
  "Disconnected denial follow-up",
  "Billing visibility gaps",
  "Front-office issues creating downstream billing problems",
  "Overbuilt support models that create unnecessary cost",
  "Practices feeling unsure about what is happening in the revenue cycle",
] as const;