const colors = require("tailwindcss/colors");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "./src/**/*.{js,ts,jsx,tsx}")],
  theme: {
    extend: {
      colors: {
        brand: colors.emerald,
      },
    },
    fontFamily: {
      display: ["var(--font-inter), -apple-system, system-ui, sans-serif"],
      body: ["var(--font-inter), -apple-system, system-ui, sans-serif"],
    },
  },
};
