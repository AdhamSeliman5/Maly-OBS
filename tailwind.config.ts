import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#020b16',
          900: '#040d1a',
          800: '#07152a',
          700: '#0a1f38',
          600: '#0d2a4d',
          500: '#1a3f6b',
          400: '#2a5d9f',
          300: '#4a7ec7',
        },
        brand: {
          teal:          '#14b8a6',
          'teal-light':  '#2dd4bf',
          'teal-dark':   '#0d9488',
          green:         '#22c55e',
          'green-light': '#4ade80',
          'green-dark':  '#16a34a',
        },
      },
      fontFamily: {
        cairo: ['"Cairo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
