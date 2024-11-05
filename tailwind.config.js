/**@type {import('tailwindcss').Config} */
const { space } = require("postcss/lib/list");
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryPurple: "#6B3CC9",
        orange: "#F28D35",
        blue: "#1CBDDD",
        green: "#4DCA79",
      },
      fontFamily: {
        inter: ["Inter"],
        lato: ["Lato"],
      },
      padding: {
        26: "26px",
        80: "80px",
        77: "77px",
        24: "24px",
        40: "40px",
        77: "77px"
      },
      spacing: {
        354: "354px",
      },
      gap: {
        28: "28px",
        12: "12px",
        20: "20px",
      },
      // fontSize: {
      //   sm: ["14px", "16.94px"],
      // },
      lineHeight: {
        lh1 : '25.41px',
        lh2 : '16.94px',
      },
    },
  },
  plugins: [],
};
