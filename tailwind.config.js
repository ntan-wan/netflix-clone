/** @type {import('tailwindcss').Config} */
const postcssPresetEnv = require('postcss-preset-env');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        placeholder: 'var(--input-label-color)',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    postcssPresetEnv({
      // importFrom: './src/css/tailwind.css',
    }),
  ],
};
