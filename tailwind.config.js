/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      '0': '0px',
      '2': 'var(--spacing-2)',
      '3': 'var(--spacing-3)',
      '4': 'var(--spacing-4)',
      '6': 'var(--spacing-6)',
      '8': 'var(--spacing-8)',
      '10': 'var(--spacing-10)',
      '12': 'var(--spacing-12)',
      '16': 'var(--spacing-16)',
      '20': 'var(--spacing-20)',
      '24': 'var(--spacing-24)',
      '32': 'var(--spacing-32)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
