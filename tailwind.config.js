/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        orkney: ["Orkney", "sans-serif"],
        georgia: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-gray": "#EEECEC",
        "light-violet": "#c2a2d0",
        "dark-violet": "#7411a2",
        "dark-gray-blue": "hsl(224,30%,27%)",
        "custom-violet": "#E9D1F7",
        "light-gray": "#E4E6EB",
        "semidark-gray": "#979595",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
