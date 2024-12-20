/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#00205B',
          800: '#002B7F',
          700: '#003399',
          600: '#0044CC',
        },
        airbus: {
          blue: '#00205B',
          gray: '#F8F9FA',
          gold: '#C5A572',
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}