/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1faf73', // Primary color
        secondary: '#01afb4', // Secondary color
        third: '#f3f5f6', // Third color
      },
    },
  },
  plugins: [],
};
