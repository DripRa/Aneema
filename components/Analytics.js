"use client";

import Script from "next/script";
import { useEffect } from "react";

// Simple, privacy-friendly tracking with GoatCounter (free, no cookie banner needed).
// SETUP:
// 1. Create an account at https://www.goatcounter.com and pick a code, e.g. "aneema".
// 2. Replace MEIN-CODE below with your code.
// The page-view count works automatically. Clicks on the survey buttons are
// counted as an event called "umfrage-klick".
export default function Analytics() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest("[data-survey]");
      if (target && window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({
          path: "umfrage-klick",
          title: "Umfrage geklickt",
          event: true,
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <Script
      data-goatcounter="https://MEIN-CODE.goatcounter.com/count"
      src="//gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
