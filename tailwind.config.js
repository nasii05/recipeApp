/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['Bebas Neue','sans-serif'],
        pro:['Prompt', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

