/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F4F5FA", // gray - global background
        "primary-100": "#5570F1", // blue - active button,
        "black-50": "#53545C", // active button
        "black-60": "#45464E", // sidebar links
        "secondary-100": "#FFCC91", // light yellow - notification badges
      },
    },
  },
  plugins: [],
};
