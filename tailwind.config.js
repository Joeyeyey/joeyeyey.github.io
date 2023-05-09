/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ssp': ["'Source Sans Pro'", "cursive"],
      },
      animation: {
        'blink-slow': 'blink 1s steps(2) infinite',
        'blink-fast': 'blink 0.5s steps(2) infinite'
      },

      keyframes: {
        blink: {
          '0%': { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}

