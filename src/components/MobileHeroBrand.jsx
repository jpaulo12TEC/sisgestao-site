import { useId } from "react";

/* Paths desenhados para viewport portrait (~390×800) */

const MOBILE_ARCS = [
  "M -20 48 C 35 22 95 42 158 92 C 188 115 198 152 178 192",
  "M -8 68 C 48 42 108 62 170 112 C 200 135 210 172 190 212",
  "M 4 88 C 60 62 120 82 182 132 C 212 155 222 192 202 232",
  "M 16 108 C 72 82 132 102 194 152",
];

const MOBILE_S_OUTER =
  "M 372 28 C 258 28 188 78 188 178 C 188 262 262 288 322 308 C 382 328 402 358 402 438 C 402 528 322 568 208 568";

const MOBILE_S_INNER =
  "M 352 52 C 258 52 208 92 208 178 C 208 252 268 274 318 292 C 368 310 382 338 382 438 C 382 512 308 542 218 542";

export default function MobileHeroBrand() {
  const uid = useId();
  const glowId = `mobile-s-glow-${uid}`;
  const blurId = `mobile-s-blur-${uid}`;

  return (
    <div className="mobile-hero-brand" aria-hidden="true">
      <svg
        className="mobile-hero-brand__svg"
        viewBox="-30 0 430 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a6bff" />
            <stop offset="50%" stopColor="#0055ff" />
            <stop offset="100%" stopColor="#003399" />
          </linearGradient>
          <filter id={blurId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {MOBILE_ARCS.map((d, i) => (
          <path
            key={d}
            className="mobile-hero-brand__arc"
            d={d}
            style={{ animationDelay: `${0.08 + i * 0.1}s` }}
          />
        ))}

        <path
          className="mobile-hero-brand__glow"
          d={MOBILE_S_OUTER}
          fill="none"
          stroke={`url(#${glowId})`}
          strokeWidth="22"
          strokeLinecap="round"
          filter={`url(#${blurId})`}
        />

        <path className="mobile-hero-brand__s mobile-hero-brand__s--outer" d={MOBILE_S_OUTER} />
        <path className="mobile-hero-brand__s mobile-hero-brand__s--inner" d={MOBILE_S_INNER} />
      </svg>
    </div>
  );
}
