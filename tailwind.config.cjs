/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./views/*/*.pug'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
