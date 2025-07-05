/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
            scrollBehavior: {
        smooth: 'smooth',
      },
      colors: {
        primary: '#007BFF',
        dark: '#000000',
        light: '#FFFFFF'
      }
    },
  },
  plugins: [],
}

