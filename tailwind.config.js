/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          DEFAULT : '#0000ff',
          'light': '#9999ff'
        },
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': {
          DEFAULT: '#49A078',
          'second':'#57be8d',
          'btn':'rgb(114,252,189)'
        },
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'adv_rando': "url('../assets/Pictures/Advantage/rando.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [
      require('tw-elements/dist/plugin')
  ],
}
