/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bloomberg: {
          black: '#000000',
          orange: '#FF7F00', // Reverted to classic Bloomberg Orange for better contrast
          orangeBright: '#FFA500',
          gray: '#1A1A1A',
          border: '#2A2A2A',
          text: '#E0E0E0',
          yellow: '#FFD700',
          cyan: '#00FFFF',
          green: '#00FF00',
          red: '#FF0000',
        }
      },
      fontFamily: {
        mono: ['Inconsolata', 'JetBrains Mono', 'Consolas', 'monospace'], // Updated font stack
        sans: ['Roboto Condensed', 'Arial', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
