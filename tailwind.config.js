/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hindi: ['Noto Serif Devanagari', 'sans-serif'],
      },
      colors: {
        iumlGreen: '#008000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};