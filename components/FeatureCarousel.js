"use client";

import { useEffect, useRef, useState } from "react";

// Shows one feature at a time. Rotates on its own and can be switched
// by the visitor via swipe, the arrows or the dots.
export default function FeatureCarousel({ items }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const n = items.length;

  const go = (step) => setI((p) => (p + step + n) % n);
  const to = (idx) => setI(((idx % n) + n) % n);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, n]);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    startX.current = null;
    setPaused(false);
  };

  const item = items[i];

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="border-t border-line pt-7 min-h-[260px]">
        <span className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-green2">
          {item.group}
        </span>
        <div key={i} className="cf-in">
          <h4 className="font-serif text-[1.7rem] text-ink mt-3 mb-2.5 leading-[1.1] flex items-center gap-2.5 flex-wrap">
            {item.title}
            {item.badge ? <span className="badge">{item.badge}</span> : null}
          </h4>
          <p className="font-sans text-ink2 text-[1rem] leading-[1.6]">{item.desc}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-7">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vorheriges Feature"
          className="w-10 h-10 rounded-full border border-stone text-ink inline-flex items-center justify-center transition-colors hover:bg-mint hover:border-mint"
        >
          ←
        </button>

        <div className="flex items-center gap-1.5">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => to(idx)}
              aria-label={`Feature ${idx + 1}`}
              className={
                idx === i
                  ? "h-1.5 w-5 rounded-full bg-green2 transition-all"
                  : "h-1.5 w-1.5 rounded-full bg-stone transition-all"
              }
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Nächstes Feature"
          className="w-10 h-10 rounded-full border border-stone text-ink inline-flex items-center justify-center transition-colors hover:bg-mint hover:border-mint"
        >
          →
        </button>
      </div>
    </div>
  );
}
