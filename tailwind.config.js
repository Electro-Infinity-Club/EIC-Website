module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        club: {
          50: '#e8f0ff',
          100: '#c2d1f0',
          200: '#9bb3e2',
          300: '#7495d7',
          400: '#4e76cc',
          500: '#355db2',
          600: '#29488b',
          700: '#1d3464',
          800: '#0f1f3d',
          900: '#020a18',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
