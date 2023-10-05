const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { ...colors.cyan, DEFAULT: "#119AAD", 1000: "#1c0f30", 0:"#FCFDFE" },
        secondary: {
          ...colors.amber,
          DEFAULT: colors.slate[50],
        },
      }
    },
  },
};

export default config;
