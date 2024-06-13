/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "../components/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#FB374F', 
        customBlack: '#0D0D0D', 
        customPink: '#C775A8' ,
      },
    },
  },
  plugins: [],
}