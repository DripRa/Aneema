/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--c-paper)",
        paper2: "var(--c-paper2)",
        white: "var(--c-white)",
        ink: "var(--c-ink)",
        ink2: "var(--c-ink2)",
        ink3: "var(--c-ink3)",
        green: "var(--c-green)",
        green2: "var(--c-green2)",
        sage: "var(--c-sage)",
        mint: "var(--c-mint)",
        stone: "var(--c-stone)",
        line: "var(--c-line)",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
