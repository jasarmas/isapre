import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8F9FA',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#6B7280',
        },
        border: '#E5E7EB',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        navbar: '0 1px 8px 0 rgb(0 0 0 / 0.08)',
        glow: '0 0 20px rgba(37, 99, 235, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
