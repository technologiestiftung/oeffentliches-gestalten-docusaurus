/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{md,mdx,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      blue: {
        '50': 'rgb(var(--blue-50) / <alpha-value>)',
        '100': 'rgb(var(--blue-100) / <alpha-value>)',
        '200': 'rgb(var(--blue-200) / <alpha-value>)',
        '300': 'rgb(var(--blue-300) / <alpha-value>)',
        '400': 'rgb(var(--blue-400) / <alpha-value>)',
        '500': 'rgb(var(--blue-500) / <alpha-value>)',
        '600': 'rgb(var(--blue-600) / <alpha-value>)',
        '700': 'rgb(var(--blue-700) / <alpha-value>)',
        '800': 'rgb(var(--blue-800) / <alpha-value>)',
        '900': 'rgb(var(--blue-900) / <alpha-value>)',
      },
      magenta: {
        '50': 'rgb(var(--magenta-50) / <alpha-value>)',
        '100': 'rgb(var(--magenta-100) / <alpha-value>)',
        '200': 'rgb(var(--magenta-200) / <alpha-value>)',
        '300': 'rgb(var(--magenta-300) / <alpha-value>)',
        '400': 'rgb(var(--magenta-400) / <alpha-value>)',
        '500': 'rgb(var(--magenta-500) / <alpha-value>)',
        '600': 'rgb(var(--magenta-600) / <alpha-value>)',
        '700': 'rgb(var(--magenta-700) / <alpha-value>)',
        '800': 'rgb(var(--magenta-800) / <alpha-value>)',
        '900': 'rgb(var(--magenta-900) / <alpha-value>)',
      },
      grey: {
        '50': 'rgb(var(--grey-50) / <alpha-value>)',
        '100': 'rgb(var(--grey-100) / <alpha-value>)',
        '200': 'rgb(var(--grey-200) / <alpha-value>)',
        '300': 'rgb(var(--grey-300) / <alpha-value>)',
        '400': 'rgb(var(--grey-400) / <alpha-value>)',
        '500': 'rgb(var(--grey-500) / <alpha-value>)',
        '600': 'rgb(var(--grey-600) / <alpha-value>)',
        '700': 'rgb(var(--grey-700) / <alpha-value>)',
        '800': 'rgb(var(--grey-800) / <alpha-value>)',
        '900': 'rgb(var(--grey-900) / <alpha-value>)',
      },
      white: '#fff',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    extend: {
      fontFamily: {
        sans: [
          'National',
          'Calibri',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}

