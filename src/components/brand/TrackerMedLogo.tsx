// src/components/brand/TrackerMedLogo.tsx

export default function TrackerMedLogo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-md" />

        <svg
          viewBox="0 0 48 48"
          className="relative h-10 w-10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M18 5h8v9h9v8h-9v9h-8v-9H9v-8h9V5Z"
            stroke="url(#trackerGradient)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          <path
            d="M11 35c8-15 18-24 28-29"
            stroke="url(#trackerGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M14 31h6l3-7 5 13 4-8h5"
            stroke="#22D3EE"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="39" cy="6" r="3" fill="#22D3EE" />

          <defs>
            <linearGradient
              id="trackerGradient"
              x1="8"
              y1="6"
              x2="42"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563EB" />
              <stop offset="0.55" stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#2DD4BF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex items-baseline tracking-tight">
        <span className="text-[1.35rem] font-semibold text-white">
          Tracker
        </span>
        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-[1.35rem] font-semibold text-transparent">
          Med
        </span>
      </div>
    </a>
  );
}