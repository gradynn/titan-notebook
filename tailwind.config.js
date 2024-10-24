/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,tsx}',
  ],
  theme: {
    colors: {
      'background': '#121212',
      'background2': '#282828',
      'primary': '#007bff',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        logo: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

