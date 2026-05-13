/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C53030",
        secondary: "#9B2222",
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        muted: "#A1A1AA",
        surface: "#121212",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        script: ["Playball", "cursive"],
      },
    },
  },
  plugins: [],
};
