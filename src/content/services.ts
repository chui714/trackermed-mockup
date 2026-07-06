// src/content/services.ts

export const servicesPageHero = {
  eyebrow: "Medical Billing Services",
  title: "Cleaner billing operations for practices that need clarity.",
  description:
    "TrackerMed helps healthcare practices improve claim visibility, reduce billing friction, follow up with confidence, and keep the revenue cycle moving with focused medical billing support.",
} as const;

export const services = [
  {
    title: "Front Office Support",
    description:
      "Support the front-office workflows that affect billing accuracy before a claim is ever submitted.",
    bullets: [
      "Identify problem areas",
      "Produce quantitative benchmarks",
      "Re-train staff on new measures",
    ],
  },
  {
    title: "Claims",
    description:
      "Help practices keep outbound claims organized, reviewed, and moving quickly through the billing workflow.",
    bullets: [
      "All claims fall under our scope of work for 48-hour or less submission",
      "Internal reconciliation reports provide consistent data",
      "Missed visits are tracked and reported to your staff",
      "Coding review and refining on all outbound claims",
    ],
  },
  {
    title: "Denial Management",
    description:
      "Review denial trends, support follow-up, and keep the practice informed about what is slowing reimbursement.",
    bullets: [
      "Artificial intelligence with human oversight allows fast, accurate reviews of denial trends",
      "Follow-ups are immediate with the overall goal of minimal A/R",
      "Connected to front office support to keep staff in the loop and avoid unnecessary denials",
      "Provide transparency on all denied claims",
      "No adjustments, only payments",
    ],
  },
  {
    title: "Claims Tracking",
    description:
      "Use internal tracking methodology in addition to the EHR system to keep claims moving through the right buckets.",
    bullets: [
      "Tracker uses a robust internal tracking methodology to keep all claims moving quickly through their buckets, in addition to your EHR system",
    ],
  },
  {
    title: "Credentialing",
    description:
      "Support provider credentialing behind the scenes so billing operations stay prepared and organized.",
    bullets: [
      "Credentialing support handled in-house",
      "Work within CAQH and provider portals behind the scenes",
      "Help keep provider enrollment and payer setup organized",
    ],
  },
] as const;

export const specialties = [
  "Infectious Disease",
  "Cardiology",
  "Dermatology",
  "Nursing Facilities",
  "Urgent Care",
  "Ophthalmology",
  "Internal Medicine",
  "Palliative Care",
  "Rheumatology",
  "Pediatrics",
] as const;

export const billingProblems = [
  "Claims are submitted, but follow-up is unclear",
  "Denials are happening without clear trend visibility",
  "Days in A/R are increasing",
  "The practice lacks billing transparency",
  "Credentialing or provider setup issues delay reimbursement",
  "Front-office workflow problems create downstream billing issues",
] as const;

export const servicesPageDifferentiators = [
  {
    title: "Focused operational support",
    description:
      "TrackerMed helps practices identify the specific parts of the billing workflow that need attention instead of forcing unnecessary services.",
  },
  {
    title: "Visibility beyond the EHR",
    description:
      "The goal is not only to submit claims, but to track movement, identify friction, and give the practice a clearer picture of the revenue cycle.",
  },
  {
    title: "Human oversight with smarter tools",
    description:
      "Technology can help identify trends faster, but TrackerMed keeps human review and practical guidance at the center of the process.",
  },
] as const;