module.exports = {
  purge: ['**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'PT Sans', 'sans-serif', '-apple-system', 'BlinkMacSystemFont']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
