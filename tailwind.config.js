import { heroui } from "@heroui/react";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '375px',
      },
      colors: {
        white: '#FFFFFF',
        'white-90': 'rgba(255, 255, 255, 0.9)',
        brand: {
          50: '#f3f4f6',
          100: '#e0e7ff',
          400: '#4f46e5',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#2563eb',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'gray-dark': '#1a1a1a',
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      boxShadow: {
        'theme-sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'theme-xl': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        datepicker: '0 4px 20px rgba(0, 0, 0, 0.1)',
        'slider-navigation': '0 4px 10px rgba(0, 0, 0, 0.1)',
        'theme-xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      spacing: {
        '6.5': '1.625rem', // atau 26px
      },
      backgroundColor: {
        'white/3': 'rgba(255, 255, 255, 0.03)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
  important: true,
  future: {
    hoverOnlyWhenSupported: true,
  },
};
