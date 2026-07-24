/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'ticker': 'ticker 30s linear infinite',
        'pulse-orange': 'pulse-orange 2s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #f97316, #ea580c)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
      },
      boxShadow: {
        'orange': '0 8px 25px rgba(249, 115, 22, 0.35)',
        'orange-lg': '0 15px 40px rgba(249, 115, 22, 0.45)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
