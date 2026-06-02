// A calm, coded mockup of the Aneema app screen for the hero.
// Built entirely with markup so it needs no real screenshot.
export default function PhoneMockup() {
  return (
    <div className="relative w-[206px] sm:w-[230px] aspect-[9/19] rounded-[38px] bg-ink p-[9px] shadow-2xl">
      <div
        className="relative h-full w-full rounded-[31px] overflow-hidden"
        style={{ background: "linear-gradient(170deg, #F6F1E4, #E3E4CF)" }}
      >
        {/* notch */}
        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[20px] w-[72px] rounded-full bg-ink z-10" />

        <div className="relative h-full w-full px-5 pt-9 pb-5 flex flex-col">
          <div className="flex items-center justify-between text-ink3 font-mono text-[10px]">
            <span>9:41</span>
            <span>Aneema</span>
          </div>

          <p className="font-serif text-ink text-[1.5rem] leading-tight mt-5">
            Schönen
            <br />
            Abend
          </p>

          {/* progress ring */}
          <div className="relative mx-auto my-5 h-[116px] w-[116px]">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#D8CFB7" strokeWidth="10" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#4F5F32"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="327"
                strokeDashoffset="105"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-serif text-ink text-[1.5rem] leading-none">3:20</span>
              <span className="font-mono text-ink3 text-[8px] tracking-wider mt-1 uppercase">
                heute offline
              </span>
            </div>
          </div>

          {/* suggestion card */}
          <div
            className="mt-auto rounded-2xl backdrop-blur px-4 py-3"
            style={{ backgroundColor: "rgba(251,247,236,.72)" }}
          >
            <p className="font-mono text-[8px] uppercase tracking-wider text-green2">Vorschlag</p>
            <p className="font-sans text-ink text-[12px] leading-snug mt-1">
              Leg das Handy weg und mach einen kurzen Spaziergang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
