// src/lib/site.ts

export const siteConfig = {
  name: "TrackerMed",
  url: "https://trackermed.com",
  title: "TrackerMed | Medical Billing & Financial Consulting",
  description:
    "TrackerMed provides medical billing, claims tracking, denial management, credentialing, MSO Lite support, and revenue cycle guidance for healthcare practices.",
  phone: "+19493852111",
  email: "chris@trackermed.com",
  addressRegion: "CA",
  sameAs: [] as string[],
} as const;

export const sitePages = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/mso-lite",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/process",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/results",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;