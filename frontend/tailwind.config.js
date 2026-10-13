/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        tealAccent: {
          500: '#0d9488',
          600: '#0f766e',
        },
        amberAccent: {
          500: '#f59e0b',
        }
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 25px -5px rgba(99, 102, 241, 0.35)',
        'card': '0 4px 20px -2px rgba(23, 23, 37, 0.06)',
      }
    },
  },
  plugins: [],
}
