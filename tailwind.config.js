// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      namasteGreen: '#a6f58c',
      namasteBlue: '#003893',
      // nBlue: '#1574f5',#3a8eff #1346b8 #364fb3 #003893
      nBlue: '#3a8eff',
      // namaste red : #C8102E;#d12528 dc143c
      namasteRed: '#dc143c',
      blue: colors.blue,
      green: colors.green,
	    warmGray: colors.warmGray,
	    lime: colors.lime,
      blueGray: colors.blueGray,
      cyan: colors.cyan,
      indigo: colors.indigo,
      lightBlue: colors.lightBlue,
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c'
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
}
