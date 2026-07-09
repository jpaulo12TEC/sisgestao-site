import {
  MOBILE_HERO_FLOW,
  MOBILE_S_INNER,
  MOBILE_S_OUTER,
  MOBILE_SECTION_FLOW,
  MOBILE_VIEWBOX_FLOW,
  MOBILE_VIEWBOX_HERO,
} from "./mobileBrandPaths.js";

export default function MobileBrand({ variant = "flow", section = 0 }) {
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
        preserveAspectRatio={isHero ? "xMidYMid slice" : "xMinYMin meet"}
        xmlns="http://www.w3.org/2000/svg"
      >
        {flowPaths.map((d, i) => (
          <path
            key={`${variant}-flow-${i}`}
            className={`mobile-brand__flow mobile-brand__flow--${i}`}
            d={d}
            style={{ animationDelay: `${0.2 + i * 0.22}s` }}
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
