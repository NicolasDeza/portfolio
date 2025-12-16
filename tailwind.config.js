/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zalando Sans Expanded"', "ui-sans-serif", "system-ui"],
      },
    },
  },

  plugins: [],
};
