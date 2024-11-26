/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
      },
      spacing: {
        '101': '32rem',
        '102': '36rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
