/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        "lms-green": "#84C873",
        "lms-light-green":"#C2EE7F",
        "lms-dark-blue":"#285A84",
        "lms-light-blue":"#EEF6F3",
        "lms-black":"#000101",
        "lms-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}