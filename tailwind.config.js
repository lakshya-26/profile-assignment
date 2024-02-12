/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 10px 20px -10px rgba(0,0,0,0.75)',
        'custom-2': '0 0 0 5px #fff'
      },
      colors: {
        'custom-color': 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  plugins: [],
}

