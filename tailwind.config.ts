import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#134E3A',
          'primary-soft': '#E8EFE9',
          'primary-dark': '#0F2922',
          secondary: '#C8A55C',
          'secondary-soft': '#F5EDD8',
          accent: '#C8A55C',
          background: '#FBF8F2',
          surface: '#FFFFFF',
          'surface-rose': '#F5F0E5',
          card: '#FFFFFF',
          text: '#1A2E22',
          muted: '#5F6B62',
          border: '#E5DFCD',
          success: '#2D6A4F',
        },
      },
      fontFamily: {
        arabic: ['var(--font-arabic)', 'system-ui', 'sans-serif'],
        latin: ['var(--font-latin)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-arabic)', 'serif'],
        sans: ['var(--font-arabic)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        luxury: '0 12px 40px -12px rgba(26, 46, 34, 0.12)',
        primary: '0 20px 40px -12px rgba(19, 78, 58, 0.25)',
        card: '0 4px 24px -4px rgba(26, 46, 34, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;
