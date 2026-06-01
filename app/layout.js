import "./globals.css";
import { Instrument_Serif, Manrope, DM_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Aneema: Mehr von dir, weniger von ihnen",
  description:
    "Aneema hilft dir, dein Handy bewusster zu nutzen. Weniger gedankenloses Scrollen, mehr Fokus und Zeit für das, was dir wirklich wichtig ist. Für Android und iOS.",
  openGraph: {
    title: "Aneema: Mehr von dir, weniger von ihnen",
    description:
      "Bewusster mit dem Handy umgehen. Weniger Scrollen, mehr Fokus. Für Android und iOS.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#1F3D34",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${instrument.variable} ${manrope.variable} ${dmMono.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
