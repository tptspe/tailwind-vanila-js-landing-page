const purge = process.env.NODE_ENV === 'production' ? true : false;
const colors = require('tailwindcss/colors');
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = {
  purge: { enabled: purge, content: ['./build/**/*.html']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: '#183373',
        DEFAULT: '#090F59',
        dark: '#0C2767',
      },
      skyBlue: {
        DEFAULT: '#00a8E8',
        light: '#1CC0FF',
        dark: '#222D4C'
      },
      grey:{
        light: '#F6FCFF',
        DEFAULT: '#979797',
        dark: '#0C0C22'
      },
      sky:{
        DEFAULT: '#22B3F2',
        light: '#CBE9F9',

      },
      darkBlue: {
        DEFAULT: '#051F54',
        dark: '#214DA6',
        light: '#0B115D'
      },
      bottomGradientStartColor: {
        DEFAULT: '#4C4C65'
      },
      bottomGradientEndColor: {
        DEFAULT: '#FF6B58'
      },
    },
    textColor: theme => theme('colors'),
    divideColor: theme => ({
      ...theme('colors'),
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#979797',
     }),
    backgroundImage: {
      'group2-pattern': "url('assets/images/Group 2.png')",
      'big-hexagon': "url('assets/images/hexagon_BG.svg')",
      'footer-texture': "url('assets/img/footer-texture.png')",
      'light-skyBlue-pattern': "url('assets/images/bg-light-skyBlue-pattern.png')",
      'double-hexagon': "url('assets/images/bg-double-hexagon.png')",
      'footer': "url('assets/images/footer-bg.png')"
     },
     backgroundPosition: {
       'left-30': 'left 0px 30%'
     },
     fontFamily: {
      'roboto': ['"Roboto"', 'ui-sans-serif']
     },
     fontSize: {
      'sm': ['0.937rem', { //15px
        lineHeight: '1.4rem',
      }],
      'lg': ['1.125rem', { //18px
        lineHeight: '1.687rem',
      }],
      'xl': ['1.5rem', { //24px
        lineHeight: '2.25rem',
      }],
      '2xl': ['1.625rem', { //26px
        lineHeight: '2.437rem',
      }],
      '3xl': ['2.125rem', { //34px
        lineHeight: '3.187rem',
      }],
      '4xl': ['2.5rem', { //40px
        lineHeight: '3.75rem',
      }],
      '5xl': ['3.125rem', { //50px
        lineHeight: '4.68rem',
      }],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
