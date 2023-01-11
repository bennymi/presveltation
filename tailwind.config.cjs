/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /duration-\d+/
    },
    {
      pattern: /opacity-\d+/
    },
    {
      pattern: /scale-\d+/
    }
],
}
