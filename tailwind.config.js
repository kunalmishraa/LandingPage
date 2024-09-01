/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamiy:{
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}