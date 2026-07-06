import { useCallback, useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000;

export default function SolutionsShowcase({ items }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [inView, setInView] = useState(false);
  const [scrollEdges, setScrollEdges] = useState({ start: true, end: false });

  const updateScrollEdges = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const maxScroll = list.scrollWidth - list.clientWidth;
    if (maxScroll <= 4) {
      setScrollEdges({ start: true, end: true });
      return;
    }

    setScrollEdges({
      start: list.scrollLeft <= 4,
      end: list.scrollLeft >= maxScroll - 4,
    });
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
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
  }, [paused, inView, items.length]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    updateScrollEdges();
    list.addEventListener("scroll", updateScrollEdges, { passive: true });
    window.addEventListener("resize", updateScrollEdges);

    return () => {
      list.removeEventListener("scroll", updateScrollEdges);
      window.removeEventListener("resize", updateScrollEdges);
    };
  }, [items.length, updateScrollEdges]);

  useEffect(() => {
    if (window.matchMedia("(min-width: 681px)").matches) return;

    const item = itemRefs.current[active];
    item?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [active]);

  useEffect(() => {
    updateScrollEdges();
  }, [active, updateScrollEdges]);

  return (
    <div
      ref={containerRef}
      className="sol-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`sol-showcase__tabs${scrollEdges.start ? " is-at-start" : ""}${scrollEdges.end ? " is-at-end" : ""}`}
      >
        <div
          ref={listRef}
          className="sol-showcase__list"
          role="tablist"
          aria-label="Soluções"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
        >
          {items.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.title}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
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
        <span className="sol-showcase__fade sol-showcase__fade--left" aria-hidden="true" />
        <span className="sol-showcase__fade sol-showcase__fade--right" aria-hidden="true" />
        <span className="sol-showcase__count" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="sol-showcase__stage">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`sol-showcase__slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <img
              src={item.image}
              alt={item.title}
              loading={index === active ? "eager" : "lazy"}
              decoding="async"
            />
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
