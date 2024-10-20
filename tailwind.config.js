/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        navBlue: '#1A73E8'
      },
      fontSize: {
        Lsize: '24.62px'
      },
      lineHeight: {
        Lheight: '20.52px'
      },

    },
    plugins: [],
  }
}