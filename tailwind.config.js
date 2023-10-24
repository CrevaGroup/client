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
      },
    },
  },
  plugins: [],
};
