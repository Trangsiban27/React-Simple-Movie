/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff3d71",
        text1: "#505050",
        text2: "#be365e",
        buttonPrimary: "#fa426f",
      },
    },
  },
  plugins: [],
};
