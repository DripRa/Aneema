export const metadata = {
  title: "Impressum | Aneema",
  description: "Anbieterkennzeichnung nach § 5 DDG.",
};

export default function Impressum() {
  return (
    <main className="bg-paper text-ink min-h-screen">
      <div className="wrap py-[clamp(48px,8vw,96px)] max-w-[820px]">
        <a
          href="/"
          className="font-mono text-[0.78rem] tracking-[0.14em] uppercase text-green2 hover:text-ink transition-colors"
        >
          ← Zurück zur Startseite
        </a>

        <h1 className="font-serif text-[clamp(2.2rem,1.6rem+3vw,3.4rem)] leading-[1.05] mt-8 mb-3">
          Impressum
        </h1>

        <div className="space-y-7 mt-10 font-sans text-ink2 text-[1.02rem] leading-[1.7]">
          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">Angaben gemäß § 5 DDG</h2>
            <p>
              Radu Manta
              <br />
              Schulstraße 9
              <br />
              59269 Beckum
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">Kontakt</h2>
            <p>E-Mail: manta.raduwd@gmail.com</p>
          </section>

          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Radu Manta
              <br />
              Schulstraße 9
              <br />
              59269 Beckum
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">Haftung für Inhalte</h2>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch
              keine Gewähr übernehmen. Als Diensteanbieter bin ich für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin
              nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">Haftung für Links</h2>
            <p>
              Dieses Angebot enthält gegebenenfalls Links zu externen Websites
              Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden
              Inhalte kann ich keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[1.5rem] text-ink mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
              solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
              meiner schriftlichen Zustimmung.
            </p>
          </section>
        </div>

        <a
          href="/"
          className="inline-block mt-12 font-mono text-[0.78rem] tracking-[0.14em] uppercase text-green2 hover:text-ink transition-colors"
        >
          ← Zurück zur Startseite
        </a>
      </div>
    </main>
  );
}
