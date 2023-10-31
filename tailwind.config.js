/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluen: '#2D79AA',
        darkbn: '#082448',
        yellown: '#FFF0CE',
        ambern: '#FFC436',
      },
    },
  },
  plugins: [],
}

