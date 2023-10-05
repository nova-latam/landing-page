const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.cyan, DEFAULT: "#119AAD", 1000: "#1c0f30" },
        secondary: {
          ...colors.amber,
          DEFAULT: colors.slate[50],
        },
      },
      darkMode: "class",
    },
  },
};

export default config;
