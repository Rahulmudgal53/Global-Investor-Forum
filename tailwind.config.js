/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Archivo': ["Archivo"],
      'Antonio': ["Antonio"],
      'Roboto': ["Roboto"],
      // 'Archivo': ["Archivo"],
      },
    },
  },
  plugins: [],
}