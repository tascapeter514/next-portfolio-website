/** @type {import('tailwindcss').Config} */




module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Includes files in /pages
    './components/**/*.{js,ts,jsx,tsx}', // Includes files in /components
    './app/**/*.{js,ts,jsx,tsx}' // For Next.js 13+ with app directory
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {

      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-30deg)'},
          '50%': {transform: 'rotate(30deg)'},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-once': 'wiggle 1s ease-in-out',
      }



    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
