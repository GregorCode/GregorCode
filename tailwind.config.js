const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Georgia', ...fontFamily.sans],
      },
      typography: (theme) => ({}),
    },
  },
  variants: { typography: ['dark'] },
  plugins: [require('@tailwindcss/typography')],
};
