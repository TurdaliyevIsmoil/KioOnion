/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/**", "./src/**"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      orange: "#FF7400",
      textColor: "#383838",
      black: "#000",
      lightGray: "#F2F2F2",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
