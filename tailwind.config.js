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
        'blink-fast': 'blink 0.5s steps(2) infinite',
        'fade-in-and-up': 'fadeinup 0.5s ease-out 0.5s forwards',
        'fade-in': 'fadein 0.7s ease-out forwards'
      },

      keyframes: {
        blink: {
          '0%': { opacity: 0 }
        },
        fadein: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        },
        fadeinup: {
          '0%': {
            opacity: 0,
            transform: 'translateY(25%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)',
          }
        }
      }
    },
  },
  plugins: [],
}

