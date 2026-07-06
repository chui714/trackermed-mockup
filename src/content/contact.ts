// src/content/contact.ts

export const contactPageContent = {
  hero: {
    eyebrow: "Free Billing Review",
    title: "Request a clearer look at your revenue cycle.",
    description:
      "Tell TrackerMed what your practice is dealing with. We’ll help identify where claims, denials, follow-up, or billing workflows may be creating unnecessary friction.",
  },

  contactMethods: [
    {
      label: "Call TrackerMed",
      value: "(949) 385 - 2111",
      href: "tel:+19493852111",
      description: "Speak directly with TrackerMed about your billing needs.",
      icon: "phone",
    },
    {
      label: "Email TrackerMed",
      value: "info@trackermed.com",
      href: "mailto:info@trackermed.com",
      description: "Send a message and receive a response within 24 hours.",
      icon: "mail",
    },
  ],

  reviewItems: [
    "Claim submission workflow",
    "Denial patterns and follow-up issues",
    "Days in A/R visibility",
    "Credentialing or provider setup concerns",
    "Front-office billing friction",
    "Revenue cycle reporting gaps",
  ],

  formFields: [
    "Practice Name",
    "Contact Name",
    "Email Address",
    "Phone Number",
    "Practice Type",
    "Main Billing Concern",
  ],

  reassurance: [
    "No obligation",
    "No pressure",
    "Private billing conversation",
    "Clear next steps",
  ],
} as const;