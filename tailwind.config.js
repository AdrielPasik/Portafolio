/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
          950: '#000D1A',
        },
        secondary: {
          50: '#F0E6FF',
          100: '#E0CCFF',
          200: '#C299FF',
          300: '#A366FF',
          400: '#8533FF',
          500: '#6600FF',
          600: '#5200CC',
          700: '#3D0099',
          800: '#290066',
          900: '#140033',
          950: '#0D001A',
        },
        accent: {
          50: '#E6FFFF',
          100: '#CCFFFF',
          200: '#99FFFF',
          300: '#66FFFF',
          400: '#33FFFF',
          500: '#00FFFF',
          600: '#00CCCC',
          700: '#009999',
          800: '#006666',
          900: '#003333',
          950: '#001A1A',
        },
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px theme(colors.secondary.400), 0 0 60px theme(colors.secondary.600)',
            opacity: 1 
          },
          '50%': { 
            'box-shadow': '0 0 10px theme(colors.secondary.400), 0 0 30px theme(colors.secondary.600)',
            opacity: 0.8 
          },
        },
      },
      boxShadow: {
        'neon': '0 0 10px theme(colors.secondary.400), 0 0 30px theme(colors.secondary.600)',
        'neon-lg': '0 0 20px theme(colors.secondary.400), 0 0 60px theme(colors.secondary.600)',
        'neon-hover': '0 0 30px theme(colors.secondary.400), 0 0 80px theme(colors.secondary.600)',
      },
    },
  },
  plugins: [],
};