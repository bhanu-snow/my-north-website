module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        darkmode: '#00224a',
        grey: '#F4F5F6',
        border: '#DBDBDB',
        deepSlate: '#02398A'
      },
      fontFamily: {
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};