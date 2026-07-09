import { useId } from "react";
import {
  MOBILE_HERO_FLOW,
  MOBILE_S_INNER,
  MOBILE_S_OUTER,
  MOBILE_SECTION_FLOW,
  MOBILE_VIEWBOX_FLOW,
  MOBILE_VIEWBOX_HERO,
} from "./mobileBrandPaths.js";

export default function MobileBrand({ variant = "flow", section = 0 }) {
  const uid = useId();
  const isHero = variant === "hero";
  const flowPaths = isHero ? MOBILE_HERO_FLOW : MOBILE_SECTION_FLOW[section % MOBILE_SECTION_FLOW.length];

  return (
    <div
      className={`mobile-brand mobile-brand--${variant}${isHero ? "" : ` mobile-brand--section-${section}`}`}
      aria-hidden="true"
    >
      <svg
        className="mobile-brand__svg"
        viewBox={isHero ? MOBILE_VIEWBOX_HERO : MOBILE_VIEWBOX_FLOW}
        preserveAspectRatio={isHero ? "xMidYMid slice" : "xMinYMin slice"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {isHero && (
          <defs>
            <radialGradient id={`mobile-s-halo-${uid}`} cx="78%" cy="42%" r="42%">
              <stop offset="0%" stopColor="rgba(0, 85, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(0, 85, 255, 0)" />
            </radialGradient>
          </defs>
        )}

        {isHero && (
          <ellipse
            className="mobile-brand__halo"
            cx="310"
            cy="270"
            rx="130"
            ry="200"
            fill={`url(#mobile-s-halo-${uid})`}
          />
        )}

        {flowPaths.map((d, i) => (
          <path
            key={`${variant}-flow-${i}`}
            className="mobile-brand__flow"
            d={d}
            style={{ animationDelay: `${0.15 + i * 0.18}s` }}
          />
        ))}

        {isHero && (
          <>
            <path className="mobile-brand__s mobile-brand__s--outer" d={MOBILE_S_OUTER} />
            <path className="mobile-brand__s mobile-brand__s--inner" d={MOBILE_S_INNER} />
          </>
        )}
      </svg>
    </div>
  );
}
