const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/svhighlight/**/*.svelte',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        neon: '0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000'
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    // plugin(function({ addVariant }) {
    //   addVariant('step-1', '')
    // })
    // plugin(function ({ matchVariant }) {
    //   matchVariant('stepTW', (n) => `&[data-number="${n}"]`)
    // }),
  ],
  // safelist: [
  //     {
  //       pattern: /duration-\d+/
  //     },
  //     {
  //       pattern: /opacity-\d+/
  //     },
  //     {
  //       pattern: /scale-\d+/
  //     }
  // ],
}
