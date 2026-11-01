import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Approved Warm Luxury Palette
        champagne: {
          50: '#FAF8F5',
          100: '#F7F4EF', // Base light background
          200: '#EFEAE0',
          300: '#E5DEC0',
          400: '#DACFA0',
          500: '#C7BA85',
        },
        nude: {
          100: '#F5EFE6',
          200: '#EADBC8', // Light nude
          300: '#DAC0A3', // Medium accent nude
          400: '#C5A888',
          500: '#B08E6C',
        },
        espresso: {
          600: '#4A3B34',
          700: '#3A2E28',
          800: '#2B231F', // Deep warm dark
          900: '#1C1613', // Contrast black-brown
          950: '#120E0C',
        },
        gold: {
          light: '#E2CEB5',
          DEFAULT: '#C5A880', // Approved gold accent
          dark: '#A68456',
        },
        cream: '#FFFDF9',
        noir: '#14100E',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px -10px rgba(43, 35, 31, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(43, 35, 31, 0.14)',
        'luxury-gold': '0 10px 25px -5px rgba(197, 168, 128, 0.25)',
      },
      letterSpacing: {
        widest: '0.25em',
        luxury: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
