/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1},
          '50%': { opacity: .8 }
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
    plugins: [],
  }