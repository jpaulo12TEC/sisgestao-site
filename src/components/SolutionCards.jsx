import { useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000;

export default function SolutionsShowcase({ items }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, ROTATE_MS);

    return () => clearInterval(id);
  }, [paused, inView, items.length, active]);

  return (
    <div
      ref={containerRef}
      className="sol-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className="sol-showcase__list" role="tablist" aria-label="Soluções">
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`sol-showcase__item${isActive ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="sol-showcase__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="sol-showcase__name">{item.title}</span>
              <span className="sol-showcase__track" aria-hidden="true">
                {isActive && !paused && inView && (
                  <span
                    className="sol-showcase__progress"
                    style={{ animationDuration: `${ROTATE_MS}ms` }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sol-showcase__stage">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`sol-showcase__slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>
        ))}
        <div className="sol-showcase__stage-glow" aria-hidden="true" />
      </div>
    </div>
  );
}

export function CapabilitiesStrip({ items }) {
  return (
    <div className="capabilities-strip">
      {items.map(({ tag, label }) => (
        <div className="capabilities-strip__item" key={tag}>
          <span className="capabilities-strip__tag">{tag}</span>
          <span className="capabilities-strip__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
