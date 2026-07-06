import { useEffect, useRef, useState } from "react";

const STEP_MS = 3500;

export default function MethodTrail({ steps }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, STEP_MS);

    return () => clearInterval(id);
  }, [visible, paused, steps.length, active]);

  const progress = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <div
      ref={ref}
      className={`method-trail${visible ? " is-visible" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      <div className="method-trail__track" aria-hidden="true">
        <svg className="method-trail__svg" viewBox="0 0 900 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0055ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0055ff" />
            </linearGradient>
          </defs>
          <path
            className="method-trail__path-bg"
            d="M 20 30 C 150 30, 250 8, 450 30 S 750 52, 880 30"
          />
          <path
            className="method-trail__path-fill"
            d="M 20 30 C 150 30, 250 8, 450 30 S 750 52, 880 30"
            style={{ "--trail-progress": `${progress}%` }}
          />
        </svg>

        <div className="method-trail__nodes">
          {steps.map((step, index) => {
            const isActive = index === active;
            const isDone = index < active;
            return (
              <button
                key={step.num}
                type="button"
                className={`method-trail__node${isActive ? " is-active" : ""}${isDone ? " is-done" : ""}`}
                onClick={() => setActive(index)}
                aria-label={`Etapa ${step.num}: ${step.title}`}
                aria-current={isActive ? "step" : undefined}
              >
                <span className="method-trail__node-ring" />
                <span className="method-trail__node-core">{step.num}</span>
                {isActive && !paused && visible && (
                  <span
                    className="method-trail__node-pulse"
                    style={{ animationDuration: `${STEP_MS}ms` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="method-trail__steps">
        {steps.map((step, index) => (
          <article
            key={step.num}
            className={`method-trail__step${index === active ? " is-active" : ""}${index < active ? " is-done" : ""}`}
          >
            <span className="method-trail__step-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
