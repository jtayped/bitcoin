/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "ui-sans-serif"],
        accent: ["Poppins", "ui-sans-serif"],
      },
      colors: {
        accent: "#f7931a",
        filler: "#1a1a1a",
        background: "#ffffff",
        text: "#000",
      },
    },
  },
  plugins: [],
};
