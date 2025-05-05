/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005A2F',
        secondary: '#86AF35',
        tertiary: '#E1D6C2',
        desc: "#505050",
      },
      fontFamily: {
        lilita: ['"Lilita One"', 'cursive'],
        lilyScript: ['"Lily Script One"', 'cursive'],
      },
      fontSize: {
        title: "24px",
        descsize: "18px",
      },
      screens: {
        '3xl': '1920px',
        'lg': '992px',
        'form': '1800px',
        'mid':'768px'
      },
    },
  },
  plugins: [],
}