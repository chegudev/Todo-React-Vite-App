/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'bgDarkImage': "url('./src/assets/images/bg-desktop-dark.jpg')"
      })
    },
    colors: {
      'Bright-Blue': '#3A7BFD',
      'light': '#57DDFF',
      'Pink': '#C058F3',
      'VDBlue': '#161722',
      'VDDBlue': '#25273C',
      'LgBlue': '#CACDE8',
      'HoverB': '#E4E5F1',
      'DGBlue': '#777A92',
      'VDarkGBlue': '#4D5066',
      'VDarkgBLUE': '#393A4C'
    },
  },
  plugins: [],
}

