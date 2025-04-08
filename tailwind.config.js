/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golf-green': {
          50: '#f0f9f4',
          100: '#dcf0e3',
          200: '#bce3ca',
          300: '#8fcda6',
          400: '#5db17d',
          500: '#3b9660',
          600: '#2a784c',
          700: '#236140',
          800: '#1f4d35',
          900: '#1b402e',
          950: '#0d2318',
        },
        'golf-gold': {
          50: '#fbf8eb',
          100: '#f7efc8',
          200: '#f0dc91',
          300: '#e9c858',
          400: '#e4b92f',
          500: '#d49f1b',
          600: '#b97c14',
          700: '#975a14',
          800: '#7c4717',
          900: '#673a18',
          950: '#3c1f0c',
        },
        'golf-cream': {
          50: '#fdfdf8',
          100: '#f9f9eb',
          200: '#f3f3d1',
          300: '#e9e7a8',
          400: '#dcd67b',
          500: '#cec157',
          600: '#b6a63c',
          700: '#978531',
          800: '#7c6c2f',
          900: '#675a2c',
          950: '#393015',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'fade-slide': 'fadeSlide 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/media/pattern.svg')",
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'gold': '0 4px 20px rgba(212, 159, 27, 0.15)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 