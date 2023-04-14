/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Slovic_H: "Slovic_Demo Historic",
        Slovic_S: "Slovic_Demo Serif",
      }
      
    },
    screens: {
      'sm': '375px',
    },
  },
  plugins: [],
}