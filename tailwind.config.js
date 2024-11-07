import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{html,js,svelte,ts}'],
    extract
  },

  theme: {
    screens,
    fontSize,
    extend: {}
  },

  plugins: [
    fluid
  ]
};
