/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', "sans-serif"],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "serif"],
      },
      colors: {
        paper: {
          base: "rgb(var(--paper-base) / <alpha-value>)",
          surface: "rgb(var(--paper-surface) / <alpha-value>)",
          layer: "rgb(var(--paper-layer) / <alpha-value>)",
          edge: "rgb(var(--paper-edge) / <alpha-value>)",
          ink: "rgb(var(--paper-ink) / <alpha-value>)",
          muted: "rgb(var(--paper-muted) / <alpha-value>)",
          accent: "rgb(var(--paper-accent) / <alpha-value>)",
          accentSoft: "rgb(var(--paper-accent-soft) / <alpha-value>)",
          accentDeep: "rgb(var(--paper-accent-deep) / <alpha-value>)",
        },
      },
      boxShadow: {
        paper: "var(--paper-shadow)",
        "paper-soft": "var(--paper-shadow-soft)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
