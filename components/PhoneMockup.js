"use client";

import { useEffect, useState } from "react";

// The phone in the hero cycles through a few app screens, each showing a
// feature. It rotates on its own and can be switched via the dots.
const screens = [
  { kicker: "Heute", title: "Schönen Abend", sub: "2 Stunden mehr als gestern", kind: "ring" },
  { kicker: "Zeitbudget", title: "Noch 25 Minuten", sub: "Dein Limit sinkt jede Woche", kind: "budget" },
  { kicker: "Kurze Pause", title: "Kurz durchatmen", sub: "Dann öffnet sich Instagram", kind: "delay" },
  { kicker: "Vorschlag", title: "Geh nach draußen", sub: "Leg das Handy weg und mach einen kurzen Spaziergang.", kind: "tip" },
];

function Visual({ kind }) {
  if (kind === "ring") {
    return (
      <div className="relative h-[112px] w-[112px]">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#D8CFB7" strokeWidth="10" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="#4F5F32" strokeWidth="10" strokeLinecap="round" strokeDasharray="327" strokeDashoffset="105" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-ink text-[1.5rem] leading-none">3:20</span>
          <span className="font-mono text-ink3 text-[8px] tracking-wider mt-1 uppercase">offline</span>
        </div>
      </div>
    );
  }
  if (kind === "budget") {
    return (
      <div className="w-full">
        <div className="h-2.5 w-full rounded-full bg-stone overflow-hidden">
          <div className="h-full rounded-full bg-green2" style={{ width: "42%" }} />
        </div>
        <div className="flex justify-between mt-2 font-mono text-[8px] uppercase tracking-wider text-ink3">
          <span>0</span>
          <span>60 Min</span>
        </div>
      </div>
    );
  }
  if (kind === "delay") {
    return (
      <div className="h-[110px] w-[110px] rounded-full flex flex-col items-center justify-center" style={{ border: "2px solid #8B9168" }}>
        <span className="font-serif text-ink text-[2rem] leading-none">7</span>
        <span className="font-mono text-ink3 text-[8px] tracking-wider mt-1 uppercase">Sekunden</span>
      </div>
    );
  }
  return (
    <div className="h-[92px] w-[92px] rounded-full bg-mint flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 5 C 30 13, 30 31, 20 37 C 10 31, 10 13, 20 5 Z" fill="#4F5F32" />
        <path d="M20 9 L20 33" stroke="#8B9168" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function PhoneMockup() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % screens.length), 3800);
    return () => clearInterval(t);
  }, []);

  const s = screens[i];

  return (
    <div className="relative w-[206px] sm:w-[230px] aspect-[9/19] rounded-[38px] bg-ink p-[9px] shadow-2xl">
      <div
        className="relative h-full w-full rounded-[31px] overflow-hidden"
        style={{ background: "linear-gradient(170deg, #F6F1E4, #E3E4CF)" }}
      >
        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[20px] w-[72px] rounded-full bg-ink z-10" />

        <div className="relative h-full w-full px-5 pt-9 pb-4 flex flex-col">
          <div className="flex items-center justify-between text-ink3 font-mono text-[10px]">
            <span>9:41</span>
            <span>Aneema</span>
          </div>

          <div key={i} className="cf-in flex-1 flex flex-col mt-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-green2">{s.kicker}</span>
            <h5 className="font-serif text-[1.45rem] text-ink leading-tight mt-2">{s.title}</h5>
            <div className="flex-1 flex items-center justify-center py-2">
              <Visual kind={s.kind} />
            </div>
            <p className="font-sans text-ink2 text-[11px] leading-snug">{s.sub}</p>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-3">
            {screens.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Screen ${idx + 1}`}
                className={
                  idx === i
                    ? "h-1.5 w-4 rounded-full bg-green2 transition-all"
                    : "h-1.5 w-1.5 rounded-full bg-stone transition-all"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
