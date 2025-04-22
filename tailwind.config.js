/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#F4E4E1',
        customWhiteHover: '#FEEEEB',
        customBlack: '#222',
      },
      fontFamily: {
        abril: ['Abril Fatface', 'serif'],
      },
    },
  },
  plugins: [],
}