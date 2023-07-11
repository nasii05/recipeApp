/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['Bebas Neue','sans-serif'],
        pro:['Prompt', 'sans-serif'],
        indie:['Indie Flower', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

