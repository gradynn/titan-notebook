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
      'secondary': '#85a4ff',
      'active': '#ffffff',
      'inactive': '#8b8b8b',
      'danger': '#ff4444',
      'success': '#13ae4b',
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

