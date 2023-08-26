/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cabin: "Cabin",
        Tilt: "Tilt Prism",
      },
    },
  },
  plugins: [],
}
