const colors = require("tailwindcss/colors");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        brand: colors.indigo,
      },
    },
    fontFamily: {
      display: ["var(--font-lexend), -apple-system, system-ui, sans-serif"],
      body: ["var(--font-lexend), -apple-system, system-ui, sans-serif"],
    },
  },
};
