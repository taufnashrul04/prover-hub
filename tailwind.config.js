/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',     // if using /pages directory
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',       // if using app router (optional)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'], // Custom heading font
      },
    },
  },
  plugins: [],
};
