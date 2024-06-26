/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "red-color": "#DD2427",
        "dark-red-color": "#A11F22",
        "dark-red-color-gradient": "#cf2326",
        "orange-color": "#E3512E",
        "gray-color": "#D1D3D4",
        "yellow-color": "#F7D31A",
      },
      fontSize: {
        "page-title-xl": "32px",
        "page-title-sm": "28px",
        "page-title-xsm": "24px",
        "page-content-xl": "20px",
        "page-content-lg": "18.5px",
        "page-content-md": "17.5px",
        "page-content-sm": "18px",
      },
      screens: {
        '17xl': '6700px',
        '16xl': '6400px',
        '15xl': '6300px',
        '14xl': '5900px',
        '13xl': '5200px',
        '12xl': '4700px',
        '11xl': '4300px',
        '10xl': '3800px',
        '9xl': '3600px',
        '8xl': '3400px',
        '7xl': '3000px',
        '6xl': '2750px',
        '5xl': '2500px',
        '4xl': '2250px',
        '3xl': '2000px',
        '2md': '850px',
        'xxsm': '520px',
        'xsm': '450px',
        'xsm2': '380px',
      },
    },
  },
  plugins: [],
}

