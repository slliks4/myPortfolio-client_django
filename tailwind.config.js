/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    darkMode: ['media', 'class'],
    extend: {
      colors:{
        primary: '#10B981',
        secondary: '#064E3B',
        error: '#DC2626'
      },
      fontFamily:{
        body: ["Quicksand"]
      },
      backgroundImage: theme => ({
        'gradient-dark': 'var(--gradient-dark)',
      }),
    },
  },
  variants: {
    backgroundImage: ['dark'],
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',  /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

