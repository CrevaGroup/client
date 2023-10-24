/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orkney: ["Orkney", "sans-serif"],
      },
      backgroundColor: {
        "custom-gray": "#EEECEC",
        "light-violet": "#c2a2d0",
        "dark-violet": "#7411a2",
      },
    },
  },
  plugins: [],
};
