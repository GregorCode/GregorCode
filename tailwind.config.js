module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  safelist: ['dark', 'light'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: { typography: ['dark'] },
  plugins: [require('@tailwindcss/typography')],
};
