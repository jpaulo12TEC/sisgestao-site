import { useEffect, useId, useState } from "react";

const S_OUTER =
  "M 780 20 C 560 20 420 90 420 210 C 420 310 540 340 660 360 C 780 380 860 410 860 520 C 860 630 720 680 480 680";

const S_INNER =
  "M 755 45 C 575 45 455 105 455 210 C 455 295 555 320 660 338 C 765 356 835 385 835 520 C 835 605 715 655 505 655";

const LEFT_ARCS = [
  "M -30 60 C 80 20 200 50 310 130 C 370 175 390 240 350 310",
  "M -20 60 C 90 25 210 55 320 135 C 385 180 405 245 365 315",
  "M -40 200 C 70 140 190 170 290 250 C 350 300 370 370 330 430",
  "M -30 200 C 80 145 200 175 300 255 C 360 305 380 375 340 435",
  "M -20 380 C 100 330 220 360 330 430 C 390 475 400 540 360 600",
  "M -10 380 C 110 335 230 365 340 435 C 400 480 410 545 370 605",
  "M 10 560 C 90 490 70 380 50 270 C 30 160 90 70 170 30",
  "M 30 580 C 110 510 90 400 70 290 C 50 180 110 90 190 50",
];

const LEFT_BOTTOM = "M -20 640 C 140 560 280 580 420 660";
const ARC_BOTTOM = "M 120 680 C 340 560 560 580 880 700";

const LEFT_VIEWBOX = "-80 0 500 720";

function useDesktopBrand() {
  const [desktop, setDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 981px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 981px)");
    const onChange = () => setDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return desktop;
}

function useMobileBrand() {
  const [mobile, setMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 680px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 680px)");
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return mobile;
}

function LeftAccent({ className = "", desktop = false, mobile = false }) {
  return (
    <svg
      className={`brand-bg__svg brand-bg__svg--left ${className}`.trim()}
      viewBox={LEFT_VIEWBOX}
      preserveAspectRatio={desktop ? "xMinYMid slice" : mobile ? "xMinYMid meet" : "xMinYMin meet"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {LEFT_ARCS.map((d, i) => (
        <path
          key={d}
          className={`brand-bg__line brand-bg__line--left brand-bg__line--left-${i + 1}`}
          d={d}
        />
      ))}
      <path className="brand-bg__line brand-bg__line--left brand-bg__line--left-bottom" d={LEFT_BOTTOM} />
    </svg>
  );
}

function RightAccent({ glow = false, uid, desktop = false, mobile = false, className = "" }) {
  const glowId = `s-glow-${uid}`;
  const blurId = `glow-blur-${uid}`;
  const blurAmount = desktop ? 22 : 6;
  const glowOuterWidth = desktop ? 52 : 26;
  const glowInnerWidth = desktop ? 34 : 16;

  return (
    <svg
      className={`brand-bg__svg brand-bg__svg--right ${className}`.trim()}
      viewBox="0 0 900 720"
      preserveAspectRatio={desktop ? "xMaxYMid slice" : mobile ? "xMaxYMid meet" : "xMaxYMid slice"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {glow && (
        <defs>
          <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a6bff" />
            <stop offset="45%" stopColor="#0055ff" />
            <stop offset="100%" stopColor="#003399" />
          </linearGradient>
          <filter id={blurId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation={blurAmount} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

      <path className="brand-bg__line brand-bg__line--right brand-bg__line--bottom" d={ARC_BOTTOM} />
      <path className="brand-bg__line brand-bg__line--right brand-bg__line--s-outer" d={S_OUTER} />
      <path className="brand-bg__line brand-bg__line--right brand-bg__line--s-inner" d={S_INNER} />

      {glow && (
        <>
          <path
            className="brand-bg__glow brand-bg__glow--outer"
            d={S_OUTER}
            fill="none"
            stroke={`url(#${glowId})`}
            strokeWidth={glowOuterWidth}
            strokeLinecap="round"
            filter={`url(#${blurId})`}
          />
          <path
            className="brand-bg__glow brand-bg__glow--inner"
            d={S_INNER}
            fill="none"
            stroke={`url(#${glowId})`}
            strokeWidth={glowInnerWidth}
            strokeLinecap="round"
            filter={`url(#${blurId})`}
          />
        </>
      )}
    </svg>
  );
}

export default function BrandBackground({ variant = "hero", glow = false, hideRightOnDesktop = false }) {
  const uid = useId();
  const desktop = useDesktopBrand();
  const mobile = useMobileBrand();
  const showLeft = variant === "hero" || variant === "left" || variant === "both";
  const showRight = variant === "hero" || variant === "right" || variant === "both" || glow;
  const showLeftGlow = showLeft && variant !== "right";

  return (
    <div
      className={`brand-bg brand-bg--${variant}${hideRightOnDesktop ? " brand-bg--no-s-desktop" : ""}`}
      aria-hidden="true"
    >
      {showLeft && <LeftAccent desktop={desktop} mobile={mobile} />}
      {showRight && <RightAccent glow={glow} uid={uid} desktop={desktop} mobile={mobile} />}
      {showLeftGlow && <div className="brand-bg__left-glow" />}
    </div>
  );
}

export function SiteBackdrop() {
  const desktop = useDesktopBrand();
  const mobile = useMobileBrand();

  return (
    <div className="site-backdrop" aria-hidden="true">
      <LeftAccent className="site-backdrop__left" desktop={desktop} mobile={mobile} />
      {desktop && (
        <svg
          className="site-backdrop__right site-backdrop__right--ghost"
          viewBox="0 0 900 720"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="site-backdrop__s"
            d={S_OUTER}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="2"
            strokeDasharray="2 10"
          />
          <path
            className="site-backdrop__s"
            d={S_INNER}
            fill="none"
            stroke="rgba(255,255,255,0.02)"
            strokeWidth="1.5"
            strokeDasharray="2 10"
          />
        </svg>
      )}
    </div>
  );
}
