/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        "main": "#228983",
        "secondary": "#1b4a47",
      }
    },
  },
  plugins: [],
}
