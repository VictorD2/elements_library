const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/elements/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1F2024",
      secondary: "#6676EF",
      transparent: "transparent",
      background: "#F2F2F2",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      rose: colors.rose,
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
