module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        current: "current",
        transparent: "transparent",
        theme: {
          main: '#34495E',
          primary: '#41B883',
          secondary: '#E8E6E7',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss/defaultTheme')
  ],
};
