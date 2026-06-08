import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark)',
          accent: 'var(--color-accent)',
          background: 'var(--color-background)',
          card: 'var(--color-card)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 12px 40px -12px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
