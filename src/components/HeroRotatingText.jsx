import { useEffect, useState } from "react";

const PHRASES = [
  "feitos para resolver.",
  "feitos para escalar.",
  "feitos para gerar valor.",
];

const INTERVAL_MS = 3200;

export default function HeroRotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % PHRASES.length);
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="hero-rotate" aria-live="polite">
      <span className="hero-rotate__inner" key={index}>
        {PHRASES[index]}
      </span>
    </span>
  );
}
