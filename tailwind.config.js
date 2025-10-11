/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1419',
        primary: {
          DEFAULT: '#7c3aed',
          light: '#8b5cf6',
        },
        accent: {
          teal: '#14b8a6',
          gold: '#fbbf24',
        },
        text: {
          gray: '#94a3b8',
          'gray-dark': '#64748b',
        },
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
}

