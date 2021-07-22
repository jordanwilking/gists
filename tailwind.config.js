module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.ts', './src/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['focus-within'],
    },
  },
  plugins: [],
}
