import Reveal from "@/components/Reveal";

const SURVEY =
  "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=W6AlmlTaUKce3F0O1OOMISv9vIlZbRIpVbtVyI8TxNUQzNMNFROUkhYMzFYQVNRWFEyVlRBQ1ZLOS4u";

function SurveyButton({ kind = "dark", label = "An der Umfrage teilnehmen" }) {
  return (
    <a
      className={`btn btn-${kind} group`}
      data-survey
      href={SURVEY}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function Brand() {
  return (
    <span className="flex items-center gap-3 font-serif text-[1.7rem] tracking-[0.01em]">
      <span className="flex-none w-8 h-8 rounded-full bg-green inline-flex items-center justify-center">
        <span className="font-serif text-paper text-[1.05rem] leading-none">A</span>
      </span>
      Aneema
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      {/* ===================== NAV ===================== */}
      <header
        className="sticky top-0 z-[100] backdrop-blur-md border-b border-line"
        style={{ backgroundColor: "rgba(244,242,235,.8)" }}
      >
        <div className="wrap flex items-center justify-between gap-[18px] py-[15px]">
          <a href="#top" aria-label="Aneema Startseite">
            <Brand />
          </a>
          <nav
            className="hidden md:flex items-center gap-[34px] text-[0.92rem] font-medium"
            aria-label="Hauptnavigation"
          >
            <a className="text-ink2 hover:text-ink transition-colors" href="#ueber">
              Über die App
            </a>
            <a className="text-ink2 hover:text-ink transition-colors" href="#funktionen">
              Funktionen
            </a>
            <a className="text-ink2 hover:text-ink transition-colors" href="#fuer-wen">
              Für wen
            </a>
            <a className="text-ink2 hover:text-ink transition-colors" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            className="btn btn-dark"
            data-survey
            href={SURVEY}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "10px 20px", fontSize: "0.88rem" }}
          >
            Umfrage
          </a>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden min-h-[88vh] flex flex-col justify-center py-[clamp(60px,9vw,110px)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-44 -right-40 z-0 h-[min(720px,95vw)] w-[min(720px,95vw)] rounded-full blur-[20px] animate-breathe"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(170,200,196,.5), rgba(143,179,166,.18) 50%, transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-36 z-0 h-[min(440px,70vw)] w-[min(440px,70vw)] rounded-full blur-[20px] animate-breathe [animation-delay:-5s]"
          style={{
            background:
              "radial-gradient(circle, rgba(228,237,230,.7), transparent 70%)",
          }}
        />
        <div className="wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="kick mb-[30px]">Bewusster leben mit Aneema</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-serif text-[clamp(2.8rem,1.6rem+6vw,5.6rem)] tracking-[-0.01em] leading-[1.04] mb-[30px]">
                  Mehr von dir,
                  <br />
                  <em className="text-green">weniger von ihnen.</em>
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="font-sans text-ink2 text-[clamp(1.12rem,1rem+0.8vw,1.5rem)] leading-[1.5] max-w-[600px] mb-[42px]">
                  Aneema hilft dir, dein Handy bewusster zu nutzen. Weniger
                  gedankenloses Scrollen, mehr Fokus und Zeit für das, was dir
                  wirklich wichtig ist.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-3.5 items-center">
                  <SurveyButton kind="dark" />
                  <a className="btn btn-line" href="#ueber">
                    Mehr erfahren
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={220}>
              <div className="relative">
                <img
                  src="/images/hero.svg"
                  alt="Ruhiger Sonnenaufgang über Hügeln (Platzhalterbild)"
                  className="w-full h-[clamp(300px,46vw,560px)] object-cover rounded-[6px]"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={420}>
            <div className="flex justify-between items-end gap-5 mt-[clamp(46px,8vw,90px)] flex-wrap">
              <span className="font-mono text-[0.8rem] tracking-[0.04em] text-ink3 inline-flex items-center gap-2.5">
                <span
                  className="w-[7px] h-[7px] rounded-full bg-sage"
                  style={{ boxShadow: "0 0 0 4px rgba(124,154,141,.18)" }}
                />
                Für Android und iOS. Aktuell in Entwicklung.
              </span>
              <span className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-ink3 inline-flex items-center gap-2.5">
                Scroll
                <span className="relative block h-[34px] w-px overflow-hidden bg-line">
                  <span className="absolute left-0 top-[-34px] block h-[34px] w-px bg-green animate-drop" />
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div
        className="overflow-hidden whitespace-nowrap border-y border-line bg-paper py-5"
        aria-hidden="true"
      >
        <div className="inline-block animate-marquee">
          <span className="font-serif italic text-[clamp(1.5rem,3vw,2.4rem)] text-ink px-[0.35em]">
            Fokus <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Ruhe{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
            Selbstbestimmung{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Kontrolle{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Fokus{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Ruhe{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
            Selbstbestimmung{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Kontrolle{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
          </span>
          <span className="font-serif italic text-[clamp(1.5rem,3vw,2.4rem)] text-ink px-[0.35em]">
            Fokus <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Ruhe{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
            Selbstbestimmung{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Kontrolle{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Fokus{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Ruhe{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
            Selbstbestimmung{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b> Kontrolle{" "}
            <b className="not-italic font-normal text-green2 px-[0.15em]">•</b>{" "}
          </span>
        </div>
      </div>

      {/* ===================== ÜBER DIE APP ===================== */}
      <section id="ueber" className="py-[clamp(74px,10vw,148px)] bg-white scroll-mt-24">
        <div className="wrap">
          <Reveal>
            <div className="max-w-[720px] mb-[clamp(46px,6vw,72px)]">
              <span className="kick">Worum es geht</span>
              <h2 className="font-serif text-[clamp(2.2rem,1.6rem+3vw,4rem)] tracking-[-0.005em] mt-5 mb-[18px] leading-[1.04]">
                Deine Aufmerksamkeit gehört dir.
              </h2>
              <p className="font-sans text-ink2 text-[1.1rem] leading-[1.55]">
                Apps sind darauf ausgelegt, dich möglichst lange zu halten. Aneema
                dreht das um und gibt dir die Kontrolle Schritt für Schritt zurück.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 md:gap-x-[clamp(28px,4vw,64px)]">
            <Reveal>
              <div className="border-t-2 border-ink pt-6 mt-9 md:mt-0">
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-green2">
                  01 / Das Problem
                </span>
                <h3 className="font-serif text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] text-green mt-3.5 mb-3 leading-[1.04]">
                  Ein Griff, eine halbe Stunde weg
                </h3>
                <p className="font-sans text-ink2 text-[1.02rem]">
                  Du öffnest eine App für eine Sekunde und verlierst eine halbe
                  Stunde. Danach bleibt oft ein leeres, unkonzentriertes Gefühl
                  zurück.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="border-t-2 border-ink pt-6 mt-9 md:mt-0">
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-green2">
                  02 / Unsere Lösung
                </span>
                <h3 className="font-serif text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] text-green mt-3.5 mb-3 leading-[1.04]">
                  Eine sanfte Pause im richtigen Moment
                </h3>
                <p className="font-sans text-ink2 text-[1.02rem]">
                  Aneema legt sich behutsam zwischen dich und den Impuls. Kleine,
                  bewusste Pausen durchbrechen den Reflex, ohne dich zu bevormunden.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="border-t-2 border-ink pt-6 mt-9 md:mt-0">
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-green2">
                  03 / Was du gewinnst
                </span>
                <h3 className="font-serif text-[clamp(1.6rem,1.3rem+1vw,2.1rem)] text-green mt-3.5 mb-3 leading-[1.04]">
                  Mehr Fokus, mehr Ruhe, mehr Zeit
                </h3>
                <p className="font-sans text-ink2 text-[1.02rem]">
                  Du gewinnst Zeit für die Dinge, die dir guttun. Schritt für
                  Schritt, in deinem eigenen Tempo, mit echten Alternativen statt
                  Leere.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FUNKTIONEN ===================== */}
      <section id="funktionen" className="py-[clamp(74px,10vw,148px)] scroll-mt-24">
        <div className="wrap">
          <Reveal>
            <div className="max-w-[720px] mb-[clamp(46px,6vw,72px)]">
              <span className="kick">Funktionen</span>
              <h2 className="font-serif text-[clamp(2.2rem,1.6rem+3vw,4rem)] tracking-[-0.005em] mt-5 mb-[18px] leading-[1.04]">
                Wie Aneema dir hilft.
              </h2>
              <p className="font-sans text-ink2 text-[1.1rem] leading-[1.55]">
                Aneema arbeitet auf zwei Seiten. Es schützt dich vor dem, was deine
                Aufmerksamkeit raubt, und schenkt dir zurück, was wirklich zählt.
              </p>
            </div>
          </Reveal>

          {/* Gruppe 1 */}
          <Reveal>
            <div>
              <div className="flex items-baseline justify-between gap-[18px] border-b border-line pb-[18px] mb-2 flex-wrap">
                <h3 className="font-serif text-[clamp(1.7rem,1.3rem+1.6vw,2.6rem)]">
                  Weniger von <em className="text-green2">ihnen</em>
                </h3>
                <span className="font-mono text-[0.76rem] tracking-[0.12em] text-ink3 uppercase">
                  Schutz vor dem gedankenlosen Scrollen
                </span>
              </div>
              <div className="grid gap-x-[clamp(26px,4vw,60px)] sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["01", "Schrumpfendes Zeitbudget", "Dein tägliches Limit sinkt sanft Woche für Woche. Ab einem niedrigen Wert planst du feste Nutzungsfenster, statt jederzeit zu scrollen."],
                  ["02", "Verzögerung vor dem Öffnen", "Ablenkende Apps öffnen nie sofort. Eine kurze Pause, optional eine kleine Denkaufgabe, durchbricht den automatischen Griff."],
                  ["03", "Bewusste Pausen", "An den kritischsten Momenten, morgens und am Ende des Limits, hält eine ruhige Atempause den stärksten Impuls auf."],
                  ["04", "Vertrauensperson-Passwort", "Wichtige Einstellungen schützt ein Passwort, das eine Person deines Vertrauens verwahrt. So bleibst du deinem Ziel treu."],
                  ["05", "Geräteübergreifende Sperre", "Was auf dem Handy blockiert ist, ist es auch auf deinen anderen Geräten. Kein einfaches Ausweichen über den Browser."],
                  ["06", "Kontextbewusster Stillmodus", "Beim Sport, draußen oder mit Freunden erkennt Aneema die Situation und reduziert Ablenkungen automatisch."],
                  ["07", "Eltern-Modus", "Eltern begleiten ihre Kinder mit gemeinsamen Regeln und Wochenberichten. Unterstützung statt ständiger Überwachung."],
                ].map(([no, title, desc]) => (
                  <article
                    key={no}
                    className="group border-t border-line pt-[26px] pb-[30px]"
                  >
                    <span className="font-mono text-[0.78rem] tracking-[0.14em] text-ink3 transition-colors duration-300 group-hover:text-green2">
                      {no}
                    </span>
                    <h4 className="font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.7rem)] text-ink mt-3 mb-2.5 leading-[1.05] transition-transform duration-300 group-hover:translate-x-1.5">
                      {title}
                    </h4>
                    <p className="font-sans text-ink2 text-[0.98rem] max-w-[38ch]">
                      {desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Gruppe 2 */}
          <Reveal>
            <div className="mt-[clamp(56px,8vw,96px)]">
              <div className="flex items-baseline justify-between gap-[18px] border-b border-line pb-[18px] mb-2 flex-wrap">
                <h3 className="font-serif text-[clamp(1.7rem,1.3rem+1.6vw,2.6rem)]">
                  Mehr von <em className="text-green2">dir</em>
                </h3>
                <span className="font-mono text-[0.76rem] tracking-[0.12em] text-ink3 uppercase">
                  Was du zurückbekommst
                </span>
              </div>
              <div className="grid gap-x-[clamp(26px,4vw,60px)] sm:grid-cols-2 lg:grid-cols-3">
                <article className="group border-t border-line pt-[26px] pb-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.14em] text-ink3 transition-colors duration-300 group-hover:text-green2">
                    01
                  </span>
                  <h4 className="font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.7rem)] text-ink mt-3 mb-2.5 leading-[1.05] transition-transform duration-300 group-hover:translate-x-1.5">
                    Personalisierte Offline-Vorschläge
                  </h4>
                  <p className="font-sans text-ink2 text-[0.98rem] max-w-[38ch]">
                    Statt Leere nach dem Weglegen bekommst du konkrete Aktivitäten,
                    die zu deinen Interessen passen, von Kreativität bis Bewegung.
                  </p>
                </article>
                <article className="group border-t border-line pt-[26px] pb-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.14em] text-ink3 transition-colors duration-300 group-hover:text-green2">
                    02
                  </span>
                  <h4 className="font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.7rem)] text-ink mt-3 mb-2.5 leading-[1.05] transition-transform duration-300 group-hover:translate-x-1.5">
                    Bewusstsein für verpasste Momente
                  </h4>
                  <p className="font-sans text-ink2 text-[0.98rem] max-w-[38ch]">
                    Aneema zeigt dir, was du gerade gewinnst, wenn du nicht scrollst.
                    Neue Ideen, echte Gespräche, einfach Ruhe.
                  </p>
                </article>
                <article className="group border-t border-line pt-[26px] pb-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.14em] text-ink3 transition-colors duration-300 group-hover:text-green2">
                    03
                  </span>
                  <h4 className="font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.7rem)] text-ink mt-3 mb-2.5 leading-[1.05] flex items-center gap-2.5 flex-wrap transition-transform duration-300 group-hover:translate-x-1.5">
                    Fortschritt & Einblicke <span className="badge">Kostenlos</span>
                  </h4>
                  <p className="font-sans text-ink2 text-[0.98rem] max-w-[38ch]">
                    Wöchentliche, monatliche und jährliche Rückblicke zeigen dir, wie
                    viel Zeit du zurückgewonnen hast. Sichtbar und motivierend.
                  </p>
                </article>
                <article className="group border-t border-line pt-[26px] pb-[30px]">
                  <span className="font-mono text-[0.78rem] tracking-[0.14em] text-ink3 transition-colors duration-300 group-hover:text-green2">
                    04
                  </span>
                  <h4 className="font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.7rem)] text-ink mt-3 mb-2.5 leading-[1.05] transition-transform duration-300 group-hover:translate-x-1.5">
                    Gemeinsame Fokus-Challenge
                  </h4>
                  <p className="font-sans text-ink2 text-[0.98rem] max-w-[38ch]">
                    Startet zu zweit oder in der Gruppe eine Challenge, ohne euch
                    gegenseitig abzulenken. Am Ende seht ihr euren Fortschritt.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ZIELGRUPPE ===================== */}
      <section id="fuer-wen" className="py-[clamp(74px,10vw,148px)] bg-white scroll-mt-24">
        <div className="wrap">
          <Reveal>
            <div className="max-w-[720px] mb-[clamp(46px,6vw,72px)]">
              <span className="kick">Für wen</span>
              <h2 className="font-serif text-[clamp(2.2rem,1.6rem+3vw,4rem)] tracking-[-0.005em] mt-5 mb-[18px] leading-[1.04]">
                Für alle, die ihre Zeit zurückwollen.
              </h2>
              <p className="font-sans text-ink2 text-[1.1rem] leading-[1.55]">
                Aneema passt sich deinem Leben an, egal ob du lernst, arbeitest oder
                einfach bewusster leben möchtest.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 md:gap-x-[clamp(26px,4vw,60px)]">
            <Reveal>
              <div className="flex gap-[18px] items-start border-t border-line py-[28px] group">
                <div className="flex-none w-[42px] h-[42px] rounded-full border border-stone text-green2 inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-mint group-hover:border-mint">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8l9-4 9 4-9 4-9-4z" />
                    <path d="M7 10v5c0 1 2 2.5 5 2.5S17 16 17 15v-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-[1.4rem] mb-1.5 leading-[1.1]">
                    Studierende und Lernende
                  </h4>
                  <p className="font-sans text-ink2 text-[0.97rem]">
                    Wenn du Fokus für Prüfungen, Hausarbeiten und Projekte brauchst,
                    ohne ständig abgelenkt zu werden.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex gap-[18px] items-start border-t border-line py-[28px] group">
                <div className="flex-none w-[42px] h-[42px] rounded-full border border-stone text-green2 inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-mint group-hover:border-mint">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="6" y="3" width="12" height="18" rx="2.5" />
                    <path d="M10 18h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-[1.4rem] mb-1.5 leading-[1.1]">
                    Viel-Scroller
                  </h4>
                  <p className="font-sans text-ink2 text-[0.97rem]">
                    Wenn soziale Medien dir täglich mehr Zeit nehmen, als du
                    eigentlich geben willst.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-[18px] items-start border-t border-line py-[28px] group">
                <div className="flex-none w-[42px] h-[42px] rounded-full border border-stone text-green2 inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-mint group-hover:border-mint">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.2" />
                    <path d="M2 19a6 6 0 0 1 12 0M15 19a5 5 0 0 1 5.5-2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-[1.4rem] mb-1.5 leading-[1.1]">
                    Eltern und Familien
                  </h4>
                  <p className="font-sans text-ink2 text-[0.97rem]">
                    Wenn du deine Kinder beim gesunden Umgang mit dem Handy begleiten
                    möchtest, mit Vertrauen statt Kontrolle.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex gap-[18px] items-start border-t border-line py-[28px] group">
                <div className="flex-none w-[42px] h-[42px] rounded-full border border-stone text-green2 inline-flex items-center justify-center transition-colors duration-300 group-hover:bg-mint group-hover:border-mint">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-[1.4rem] mb-1.5 leading-[1.1]">
                    Alle bewussten Köpfe
                  </h4>
                  <p className="font-sans text-ink2 text-[0.97rem]">
                    Wenn du selbstbestimmter leben und deine Aufmerksamkeit gezielter
                    einsetzen willst.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SHOWCASE BILD ===================== */}
      <section className="py-[clamp(20px,4vw,44px)]">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-[6px]">
              <img
                src="/images/calm.svg"
                alt="Ruhige Landschaft am Morgen (Platzhalterbild)"
                className="w-full h-[clamp(260px,42vw,520px)] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(22,35,30,.6), rgba(22,35,30,0) 60%)",
                }}
              />
              <p className="absolute left-0 bottom-0 p-[clamp(24px,4vw,52px)] font-serif text-paper leading-[1.05] text-[clamp(1.8rem,1.2rem+3vw,3.4rem)] max-w-[18ch]">
                Mehr von dir, <em>weniger von ihnen.</em>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== VERFÜGBARKEIT ===================== */}
      <section className="py-[clamp(74px,10vw,148px)]">
        <div className="wrap">
          <Reveal>
            <div className="text-center border border-line rounded-[4px] bg-paper2 px-[clamp(20px,5vw,52px)] py-[clamp(44px,7vw,86px)]">
              <span className="kick center">Verfügbarkeit</span>
              <h2 className="font-serif text-[clamp(2rem,1.5rem+2.4vw,3.2rem)] mt-[18px] mb-4 leading-[1.04]">
                Bald für Android und iOS
              </h2>
              <p className="font-sans text-ink2 max-w-[560px] mx-auto mb-9 text-[1.06rem]">
                Wir entwickeln gerade die erste Version von Aneema. Trag dich über
                die Umfrage ein, um zum Start als Erste oder Erster dabei zu sein.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <span className="group inline-flex items-center gap-3 border border-ink rounded-[3px] px-[22px] py-[13px] text-left text-ink transition-all duration-300 hover:-translate-y-[3px] hover:bg-ink hover:text-paper">
                  <svg className="w-6 h-6 fill-current flex-none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.05 12.5c-.02-2.3 1.88-3.4 1.96-3.45-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.97.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.66 2.34 2.85 2.3 1.14-.05 1.57-.74 2.95-.74 1.37 0 1.76.74 2.96.71 1.22-.02 2-1.12 2.75-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.63zM14.8 5.6c.63-.76 1.05-1.82.94-2.88-.9.04-2 .6-2.65 1.36-.58.67-1.09 1.75-.95 2.78 1.01.08 2.03-.51 2.66-1.26z" />
                  </svg>
                  <span>
                    <small className="block font-mono text-[0.66rem] tracking-[0.08em] leading-[1.3] opacity-70">
                      Bald im
                    </small>
                    <strong className="block text-[1rem] font-semibold leading-[1.2]">
                      App Store
                    </strong>
                  </span>
                </span>
                <span className="group inline-flex items-center gap-3 border border-ink rounded-[3px] px-[22px] py-[13px] text-left text-ink transition-all duration-300 hover:-translate-y-[3px] hover:bg-ink hover:text-paper">
                  <svg className="w-6 h-6 fill-current flex-none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.6 2.3c-.2.2-.3.5-.3.9v17.6c0 .4.1.7.3.9l.1.1L13.5 12v-.2L3.7 2.2l-.1.1zM17 15.3l-3.3-3.3v-.2L17 8.5l.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3L17.1 15.3zM13.7 12.2l3.4 3.4-9.8 5.6c-.4.2-.7.2-1 0l7.4-9zM7.3 2.8c-.3-.2-.6-.2-1 0l9.8 5.6-3.4 3.4-5.4-9z" />
                  </svg>
                  <span>
                    <small className="block font-mono text-[0.66rem] tracking-[0.08em] leading-[1.3] opacity-70">
                      Bald bei
                    </small>
                    <strong className="block text-[1rem] font-semibold leading-[1.2]">
                      Google Play
                    </strong>
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== UMFRAGE ===================== */}
      <section id="umfrage" className="py-[clamp(74px,10vw,148px)] scroll-mt-24">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-[4px] bg-green text-paper text-center px-[clamp(20px,5vw,52px)] py-[clamp(50px,8vw,110px)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-44 h-[520px] w-[520px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,.1), transparent 68%)",
                }}
              />
              <div className="relative max-w-[640px] mx-auto">
                <span className="kick center text-mint">Deine Stimme zählt</span>
                <h2 className="font-serif text-paper text-[clamp(2.1rem,1.5rem+3vw,3.8rem)] mt-5 mb-[18px] leading-[1.04] tracking-[-0.005em]">
                  Hilf uns, Aneema besser zu machen.
                </h2>
                <p className="font-sans text-paper opacity-80 text-[1.1rem] mb-9 leading-[1.55]">
                  Aneema entsteht für dich. In wenigen Minuten erzählst du uns, was
                  du wirklich brauchst. Deine Antworten fließen direkt in die
                  Entwicklung ein.
                </p>
                <SurveyButton kind="paper" />
                <div className="mt-[26px] flex gap-[26px] justify-center flex-wrap font-mono text-[0.76rem] tracking-[0.04em] text-paper opacity-70">
                  <span className="inline-flex items-center gap-2.5">
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="#9DBBB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    Etwa 3 Minuten
                  </span>
                  <span className="inline-flex items-center gap-2.5">
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="#9DBBB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    Anonym
                  </span>
                  <span className="inline-flex items-center gap-2.5">
                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="#9DBBB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Früher Zugang zum Launch
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="py-[clamp(74px,10vw,148px)] bg-white scroll-mt-24">
        <div className="wrap">
          <Reveal>
            <div className="text-center mx-auto max-w-[720px] mb-[clamp(46px,6vw,72px)]">
              <span className="kick center">FAQ</span>
              <h2 className="font-serif text-[clamp(2.2rem,1.6rem+3vw,4rem)] mt-5 leading-[1.04]">
                Häufige Fragen
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="faq max-w-[820px] mx-auto">
              {[
                ["Was macht die App?", "Aneema hilft dir, dein Handy bewusster zu nutzen. Sie legt kleine, bewusste Pausen zwischen dich und ablenkende Apps und schlägt dir sinnvolle Alternativen vor, damit du weniger gedankenlos scrollst und mehr Zeit für das Wesentliche hast."],
                ["Ist sie kostenlos?", "Aneema wird eine kostenlose Version mit den wichtigsten Funktionen bieten, darunter deine Fortschritts-Einblicke. Für erweiterte Funktionen ist ein optionales Abo geplant. Die genauen Details legen wir gerade fest, auch mithilfe deiner Antworten aus der Umfrage."],
                ["Für welche Geräte erscheint sie?", "Aneema erscheint für Android und iOS. So kannst du Aneema unabhängig von deinem Smartphone nutzen."],
                ["Welche Daten werden erfasst?", "So wenig wie möglich. Deine Nutzungsdaten dienen vor allem deinen eigenen Einblicken. Die Umfrage ist anonym. Eine E-Mail-Adresse gibst du nur freiwillig an, wenn du zum Launch informiert werden möchtest."],
                ["Wann erscheint sie?", "Wir sind mitten in der Entwicklung. Über die Umfrage kannst du dich für frühen Zugang eintragen und erfährst als Erste oder Erster, sobald es losgeht."],
                ["Wie kann ich Feedback geben?", "Am besten über unsere kurze Umfrage. Sie dauert nur wenige Minuten und ist gerade jetzt, in der Entwicklungsphase, eine große Hilfe für uns."],
              ].map(([q, a]) => (
                <details key={q}>
                  <summary className="flex justify-between items-center gap-5 py-[26px] px-1">
                    <h4 className="font-serif font-normal text-[clamp(1.3rem,1.1rem+0.7vw,1.7rem)] text-ink m-0">
                      {q}
                    </h4>
                    <svg
                      className="flex-none w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ stroke: "var(--c-green2)" }}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="font-sans px-1 pb-7 text-ink2 text-[1.02rem] leading-[1.65] max-w-[64ch]">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-paper border-t border-line pt-[clamp(56px,7vw,84px)] pb-9">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-[2.2fr_1fr_1fr] mb-12">
            <div>
              <Brand />
              <p className="font-sans text-ink2 text-[0.96rem] max-w-[330px] mt-4">
                Mehr von dir, weniger von ihnen. Bewusster mit dem Handy umgehen und
                Zeit für das Wesentliche zurückgewinnen.
              </p>
            </div>
            <div>
              <h5 className="font-mono uppercase text-ink3 text-[0.72rem] tracking-[0.16em] mb-[18px]">
                Rechtliches
              </h5>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow">
                Impressum
              </a>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow">
                Datenschutz
              </a>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow">
                Kontakt
              </a>
            </div>
            <div>
              <h5 className="font-mono uppercase text-ink3 text-[0.72rem] tracking-[0.16em] mb-[18px]">
                Folge uns
              </h5>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow" target="_blank">
                Instagram
              </a>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow" target="_blank">
                TikTok
              </a>
              <a className="block font-sans text-ink text-[0.97rem] mb-3 hover:pl-1.5 hover:text-green2 transition-all" href="#" rel="nofollow" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-line pt-[26px] flex flex-wrap gap-3 justify-between items-center font-mono text-[0.74rem] tracking-[0.03em] text-ink3">
            <span>© 2026 Aneema. Alle Rechte vorbehalten.</span>
            <span>Diese Seite befindet sich im Aufbau.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
