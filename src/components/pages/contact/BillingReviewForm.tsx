import {
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import { contactPageContent } from "@/content/contact";

export default function BillingReviewForm() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-[100px]" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-black shadow-xl shadow-cyan-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Start Here
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-white">
              Billing Review Request
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactPageContent.formFields.map((field) => (
            <label key={field} className="grid gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                {field}
              </span>

              <div className="h-12 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-slate-500">
                <div className="flex h-full items-center">
                  {field === "Main Billing Concern"
                    ? "Denials, A/R, claims, credentialing..."
                    : field}
                </div>
              </div>
            </label>
          ))}
        </div>

        <label className="mt-4 grid gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Additional Details
          </span>

          <div className="min-h-32 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-slate-500">
            Briefly describe what your practice is experiencing...
          </div>
        </label>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-start gap-3">
            <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />

            <p className="text-xs leading-5 text-slate-400">
              Your information is used only to respond to your inquiry and
              discuss TrackerMed services. For SMS and privacy details, please
              review the Privacy Policy.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {contactPageContent.reassurance.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}