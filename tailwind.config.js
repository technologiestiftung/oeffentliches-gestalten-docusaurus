/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './docs/**/*.{md,mdx,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      blue: {
        '50': '#F4F4FA',
        '200': '#ACACDA',
        '300': '#9797D1',
        '500': '#2F2FA2',
      },
      magenta: {
        '50': '#F9ECEF',
        '200': '#FDCAD6',
        '300': '#FAA5B8',
        '500': '#F64C72',
      },
      grey: {
        '50': '#ECECEF',
        '200': '#C4C4D0',
        '300': '#9C9DB0',
        '500': '#393A60',
        '800': '#101019',
        '900': '#0E0E14',
      },
      white: '#fff',
      trasparent: 'transparent',
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

