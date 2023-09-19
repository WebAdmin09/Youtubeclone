export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
      kpx: {max:"1000px"},
			md: { max: "767px" },
			sm: { max: "639px" },
      hab: {max: "545px"},
      nvs: {max: "500px"},
      mins: {max: "350px"}
		},
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Exo 2', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}