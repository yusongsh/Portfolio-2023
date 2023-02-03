/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(60px, -30px) scale(1.6)",
          },
          "66%": {
            transform: "translate(-40px, 40px) scale(1.2)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        mainbg: "#101011",
        maingrey: "#CBCBCB",
        darkgrey: "#bbbbbb",
        fadelight: "#383838",
        error: "#FD4E28",
        accent: "#32A4C3",
      },
    },
  },
  plugins: [],
};
