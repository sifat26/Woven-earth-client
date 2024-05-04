/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: ["light", "dark"],
    },
  }
)

