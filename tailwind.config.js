/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          ivory: '#F6F4EF',
          white: '#FFFFFF',
          dark: '#111111',
          black: '#151515',
          border: '#DEDCD6',
          borderDark: '#262626',
          muted: '#666666',
          mutedLight: '#9E9C96',
          champagne: '#B69A6A',
          champagneLight: '#D4C09A',
          recRed: '#E53E3E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        serif: ['"Bodoni Moda"', '"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Bodoni Moda"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(21, 21, 21, 0.05)',
        'editorial': '0 20px 40px -15px rgba(21, 21, 21, 0.12)',
        'cinematic': '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
