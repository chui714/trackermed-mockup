// src/components/brand/TrackerMedLogo.tsx

import styles from "./TrackerMedLogo.module.css";

export default function TrackerMedLogo() {
  return (
    <a
      href="/"
      aria-label="TrackerMed home"
      className="group inline-flex items-center"
    >
      <svg
        viewBox="0 0 340 100"
        className="h-[78px] w-[230px] sm:w-[265px]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="trackerLogoGoldGlow"
            x="-20%"
            y="-80%"
            width="140%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="trackerLogoGold"
            x1="0"
            y1="42"
            x2="340"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6f5a1d" stopOpacity="0.2" />
            <stop offset="0.25" stopColor="#c7a84a" />
            <stop offset="0.5" stopColor="#f1d27a" />
            <stop offset="0.78" stopColor="#c7a84a" />
            <stop offset="1" stopColor="#6f5a1d" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Wordmark */}
        <text
          x="18"
          y="54"
          fill="#f8fafc"
          fontSize="46"
          fontWeight="500"
          letterSpacing="10"
          style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
        >
          TR
        </text>

        <text
          x="172"
          y="54"
          fill="#f8fafc"
          fontSize="46"
          fontWeight="500"
          letterSpacing="10"
          style={{ fontFamily: "var(--font-cinzel), Georgia, serif" }}
        >
          CKER
        </text>

        {/* EKG line through the middle of the lettering */}
        <path
          className={styles.ekgLine}
          d="
            M 0 42
            H 122
            L 134 10
            L 145 76
            L 156 42
            H 244
            L 249 42
            L 253 31
            L 258 53
            L 263 42
            H 340
          "
          stroke="url(#trackerLogoGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#trackerLogoGoldGlow)"
        />

        {/* traveling pulse */}
        <path
          className={styles.ekgPulse}
          d="
            M 0 42
            H 122
            L 134 10
            L 145 76
            L 156 42
            H 242
            L 247 42
            L 251 31
            L 256 53
            L 261 42
            H 340
          "
          stroke="#FDE68A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* subtle gold base shadow */}
        <path
          className={styles.ekgShadow}
          d="
            M 0 44
            H 122
            L 134 12
            L 145 78
            L 156 44
            H 242
            L 247 42
            L 251 31
            L 256 53
            L 261 42
            H 340
          "
          stroke="#6f5a1d"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />

        {/* Subtitle */}
        <text
          x="170"
          y="98"
          fill="#cbd5e1"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="3.2"
          textAnchor="middle"
          textLength="270"
          lengthAdjust="spacing"
          style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}
        >
          MEDICAL BILLING | FINANCIAL CONSULTING
        </text>
      </svg>
    </a>
  );
}