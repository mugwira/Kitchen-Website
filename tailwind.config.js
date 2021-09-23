module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "6rem", 
      screen:{
        lg: "1124",
        xl: "1124",
        "2xl": "1124"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
