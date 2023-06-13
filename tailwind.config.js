/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#03b6e2",
        green: "#678d99",
        "btn-green": "#3fb717",
      },
    },
  },
  plugins: [],
};
