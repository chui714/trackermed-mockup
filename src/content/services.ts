// src/content/services.ts

export const services = [
  {
    title: "Front Office Support",
    bullets: [
      "Identify problem areas",
      "Prodcuce quantitative benchmarks",
      "Re-train staff on new measures",
    ],
  },
  {
    title: "Claims",
    bullets: [
      "All claims fall under our SOW for 48 hours or less submission",
      "Internal reconciliation reports provide consistent data",
      "Missed visits are tracked and reported to your staff",
      "Coding review and refining on all outbound claims",
    ],
  },
  {
    title: "Denial Management",
    bullets: [
      "Artificial intelligence with human oversight allows fast , accurate reviews of denial trends",
      "Follow ups are immediate with the overall goal of minimal AR",
      "Connected to front office support to keep staff in the loop and avoid unnecessary denials",
      "Provide transparency on all denied claims",
      "No adjustments, only payments",
    ],
  },
  {
    title: "Claims Tracking",
    bullets: [
      "Tracker uses a robust internal tracking methodology to keep all claims moving quickly through their buckets, in addition to your EHR system",
    ]
  },
  {
    title: "Credentialing",
    bullets: [
      "When you work with us, we support you. Credentialing in-house",
      "Working within CAQH & every other provider portal behind the scenes to keep every...",
    ],
  },
] as const;

export const specialties = [
  "Infectious Disease",
  "Cardiology",
  "Dermatology",
  "Nursing Facilities",
  "Urgent Care",
  "Ophthamology",
  "Internal Medicine",
  "Palliative Care",
  "Rheumatology",
  "Pediatrics",
] as const;