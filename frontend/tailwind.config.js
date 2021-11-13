module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: 'red',
          light: 'black',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
