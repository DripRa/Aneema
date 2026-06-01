# Aneema Landingpage (Next.js + Tailwind)

Eine ruhige, editoriale Landingpage für Aneema. Gebaut mit Next.js und Tailwind CSS.

---

## Schritt 1: Node.js installieren (einmalig)

Lade die LTS-Version von Node.js herunter und installiere sie:
https://nodejs.org

Node.js bringt `npm` mit, das du im nächsten Schritt brauchst. Nach der
Installation einmal das Terminal neu öffnen.

## Schritt 2: Projekt starten

Öffne das Terminal (auf dem Mac: Programme > Dienstprogramme > Terminal),
geh in diesen Ordner und führe nacheinander aus:

```
cd Pfad/zu/aneema-next
npm install
npm run dev
```

Danach öffne im Browser:

```
http://localhost:3000
```

Die Seite läuft jetzt lokal auf deinem Rechner. Änderungen am Code erscheinen
sofort. Zum Stoppen im Terminal `Strg + C` drücken.

---

## Tracking aktivieren (optional)

Das Projekt nutzt GoatCounter (kostenlos, datenschutzfreundlich, kein
Cookie-Banner nötig).

1. Konto erstellen auf https://www.goatcounter.com und einen Code wählen, z. B. `aneema`.
2. In der Datei `components/Analytics.js` den Platzhalter `MEIN-CODE` durch deinen Code ersetzen.

Seitenaufrufe werden dann automatisch gezählt. Klicks auf die Umfrage-Buttons
laufen als Ereignis `umfrage-klick` ein.

---

## Bilder austauschen

Die Bilder im Ordner `public/images/` sind ruhige Platzhalter-Grafiken
(`hero.svg` und `calm.svg`). So ersetzt du sie durch echte Fotos:

Variante A (am einfachsten): Lege dein eigenes Foto in `public/images/` und
benenne es exakt wie das Platzhalterbild, also `hero.svg` bzw. `calm.svg`
ersetzen oder die Endung im Code anpassen.

Variante B: Öffne `app/page.js`, suche nach `/images/hero.svg` bzw.
`/images/calm.svg` und ändere den Pfad auf deinen Dateinamen, z. B.
`/images/mein-foto.jpg`. Es funktioniert jeder Dateiname und auch eine externe
Bild-Adresse.

Passende, kostenlose Fotos (ruhig, Natur, Fokus, Handy weglegen) findest du hier:
- https://unsplash.com
- https://www.pexels.com

Achte beim Hero-Bild auf ein hochformatiges Foto, beim Showcase-Bild auf ein
breites Querformat.

---

## Online stellen (Deployment)

Wichtig: Ein Next.js-Projekt lässt sich nicht per Drag-and-drop hochladen, weil
es vorher gebaut werden muss. Der einfachste Weg ist Vercel (vom Next.js-Team,
kostenlos):

1. Lege ein kostenloses Konto an auf https://vercel.com
2. Lade dein Projekt zu GitHub hoch (https://github.com) oder nutze die Vercel-Anleitung.
3. In Vercel das Projekt importieren. Vercel erkennt Next.js automatisch und baut die Seite.
4. Danach kannst du in den Vercel-Einstellungen deine bei Squarespace gekaufte Domain verbinden.

Alternativ kannst du lokal mit `npm run build` eine Produktionsversion bauen.

---

## Projektaufbau (kurz)

- `app/page.js` – die komplette Seite mit allen Abschnitten
- `app/layout.js` – Schriften und SEO-Angaben
- `app/globals.css` – Farben, Hilfsklassen, Animationen
- `components/Reveal.js` – sanftes Einblenden beim Scrollen (auch beim Hoch- und Runterscrollen)
- `components/Analytics.js` – GoatCounter-Tracking
- `public/images/` – die Bilder
