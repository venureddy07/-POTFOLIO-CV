/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030014',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#f3f4f6',
          muted: '#9ca3af'
        },
        light: {
          bg: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(0, 0, 0, 0.06)',
          text: '#0f172a',
          muted: '#475569'
        },
        accent: {
          purple: '#8b5cf6', // Indigo/violet
          cyan: '#06b6d4',   // Neon cyan
          pink: '#ec4899',   // Highlight pink
          blue: '#3b82f6'    // Soft blue
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
