import { useId } from "react";

const HERO_RIBBONS = [
  "M -50 100 C 90 30 210 90 290 200 S 390 380 360 520",
  "M -30 180 C 110 110 230 170 310 280 S 410 460 380 600",
];

const SECTION_RIBBONS = [
  "M -40 0 C 70 50 150 110 220 170 S 300 260 280 340",
  "M -30 20 C 80 70 160 130 230 190 S 310 280 290 360",
  "M -50 10 C 60 60 140 120 210 180 S 290 270 270 350",
  "M -35 15 C 75 65 155 125 225 185 S 305 275 285 355",
];

export default function MobileFlowVisual({ variant = "section", section = 0 }) {
  const uid = useId();
  const isHero = variant === "hero";
  const ribbonId = `mobile-flow-ribbon-${uid}`;
  const glowId = `mobile-flow-glow-${uid}`;

  return (
    <div className={`mobile-flow mobile-flow--${variant}`} aria-hidden="true">
      <svg
        className="mobile-flow__svg"
        viewBox={isHero ? "0 0 390 844" : "0 0 390 320"}
        preserveAspectRatio={isHero ? "xMidYMid slice" : "xMinYMin slice"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={ribbonId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0055ff" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#1a6bff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={glowId} cx="82%" cy="28%" r="48%">
            <stop offset="0%" stopColor="#0055ff" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#0055ff" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {isHero && (
          <ellipse className="mobile-flow__glow" cx="320" cy="200" rx="160" ry="200" fill={`url(#${glowId})`} />
        )}

        {(isHero ? HERO_RIBBONS : [SECTION_RIBBONS[section % SECTION_RIBBONS.length]]).map((d, i) => (
          <path
            key={`ribbon-${i}`}
            className={`mobile-flow__ribbon mobile-flow__ribbon--${i}`}
            d={d}
            fill="none"
            stroke={`url(#${ribbonId})`}
            strokeWidth={isHero ? (i === 0 ? 28 : 20) : 18}
            strokeLinecap="round"
            style={{ animationDelay: `${0.15 + i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
