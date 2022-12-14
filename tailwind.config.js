/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "lms-green": "#01a3a4",
        "lms-light-green":"#C2EE7F",
        "lms-dark-blue":"#285A84",
        "lms-light-blue":"#0abde3",
        "lms-black":"#000101",
        "lms-white":"#c8d6e5",
        "lms-gray":"#8395a7"
      },
    },
  },
  plugins: [],
}