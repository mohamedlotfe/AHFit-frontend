/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Tajawal", "Arial", "sans-serif"], // Add your Arabic font here
      },
      colors: {
        primary: "#000", // Black Color
        secondary: "#fda72b", // Orange Color
        lightText: "#D5C5AF", // Lighter Text
        whiteText: "#FFFFFF", // White Text
        grayText: "#171717", // Gray Text
        ligtGray: "#f3f4f6", // Light Gray
      },
    },
  },
  plugins: [],
};
