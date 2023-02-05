const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/svhighlight/**/*.svelte',
  ],
  theme: {
    extend: {},
  },
  plugins: [
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
