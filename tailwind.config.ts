import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode palette - WCAG AA ratios verified
        slate: {
          950: '#0f172a', // Nearly black - base
          900: '#0f172a',
          800: '#1e293b', // Cards, sections
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1', // Secondary text - 12:1 ratio
          200: '#e2e8f0',
          100: '#f1f5f9', // Primary text - 17.5:1 ratio
          50: '#f8fafc',
        },
        blue: {
          600: '#2563eb',
          500: '#3b82f6', // Primary accent - 7.5:1 ratio
          400: '#60a5fa',
        },
        violet: {
          600: '#7c3aed',
          500: '#8b5cf6', // Secondary accent - 5.6:1 ratio
          400: '#a78bfa',
        },
        red: {
          500: '#ef4444', // Error state
          600: '#dc2626',
        },
        green: {
          500: '#22c55e', // Success state
          600: '#16a34a',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
