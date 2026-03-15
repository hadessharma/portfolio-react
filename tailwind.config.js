/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', "sans-serif"],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "serif"],
      },
      colors: {
        paper: {
          base: "#f6f1e8",
          surface: "#fcf8f0",
          layer: "#f1eadf",
          edge: "#d7ccbb",
          ink: "#2f2a25",
          muted: "#5b534a",
          accent: "#365b82",
          accentSoft: "#e8edf3",
          accentDeep: "#27476b",
        },
      },
      boxShadow: {
        paper: "0 1px 0 rgba(47,42,37,0.06), 0 8px 24px rgba(47,42,37,0.08)",
        "paper-soft": "0 1px 0 rgba(47,42,37,0.05), 0 4px 14px rgba(47,42,37,0.07)",
      },
      backgroundImage: {
        "paper-texture": "url('/paper-texture.svg')",
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
