/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f48a28',
          200: 'rgb(194, 65, 12)'
        },
        secondary: {
          100: '#fff',
          200: '#363339',
          300: '#131016'
        }
      }
    },
  },
  plugins: [],
}