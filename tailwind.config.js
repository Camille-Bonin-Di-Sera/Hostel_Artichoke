/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0000ff",
          light: "#9999ff",
        },
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': {
          DEFAULT: '#49A078',
          'glass': 'rgb(255,0,0)',
          'second':'#57be8d',
          'btn':'rgb(114,252,189)'
        },
        red: {
          DEFAULT: "#bf0603",
        },
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        "gray": "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        adpro: ['AdventPro']
      },
      spacing:{
        'zob': '32px'
      },
      backgroundImage: {
        'adv_rando': "url('../assets/Pictures/Advantage/rando.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'contact-bg':"url('./src/assets/Pictures/background/bk-count.jpg')" ,
      }

    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
