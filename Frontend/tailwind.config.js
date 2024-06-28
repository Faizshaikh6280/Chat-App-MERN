/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skeleton: {
          DEFAULT: "#2d2d2d", // Dark background for skeleton
          light: "#3d3d3d", // Slightly lighter for gradients/effects
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
