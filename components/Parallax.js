"use client";

import { useEffect, useRef, useState } from "react";

// Moves its content gently as the page scrolls, for a subtle sense of depth.
// "max" is the largest shift in pixels (small numbers stay tasteful).
export default function Parallax({ children, max = 20, className = "" }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Layout position that is NOT affected by CSS transforms (avoids feedback).
    const docTop = (el) => {
      let y = 0;
      while (el) {
        y += el.offsetTop;
        el = el.offsetParent;
      }
      return y;
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const center = docTop(el) + el.offsetHeight / 2 - window.scrollY;
      let progress = (center - vh / 2) / (vh / 2 + el.offsetHeight / 2);
      if (progress > 1) progress = 1;
      if (progress < -1) progress = -1;
      setOffset(progress * max);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
