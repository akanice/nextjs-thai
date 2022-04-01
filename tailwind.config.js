module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}