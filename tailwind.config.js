/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/sections/**/8.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", "system-ui", "ui-sans-serif"],
      display: ["var(--font-montserrat)", "system-ui", "Oswald"],
      body: ["var(--font-montserrat)", "system-ui", '"Open Sans"'],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": ["3rem", "4rem"],
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },
    colors: {
      "white-100": "#FFFFFF",
      "white-200": "#F6F6F6",
      "black-100": "#000000",
      "black-200": "#1D1D1B",
      "primary-100": "#292526",
      "primary-200": "#E0EAF3",
      "primary-300": "#F86642",
      "primary-400": "#FF734F",
    },
    extend: {
      backgroundImage: ({ theme }) => ({
        "image-gradient-75deg":
          "linear-gradient(75deg, var(--tw-gradient-stops))",
        "linear-gradient-45deg":
          "linear-gradient(45deg, var(--tw-gradient-stops))",
      }),
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
      gridTemplateColumns: {
        customTempCols: "repeat(auto-fit, minmax(0%, 1fr))",
      },
      width: {
        95: "95%",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        slideLeft: {
          "0%": { "margin-left": "-0%" },
          "100%": { "margin-left": "-100%" },
        },
      },
      animation: {
        slideLeft: "slideLeft 300ms ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
