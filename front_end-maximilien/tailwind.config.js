module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        firaCode: "Fira Code, monospace",
      },
      colors: {
        "grey-custom": "#DDDDDD",
        "bg-white": "#DDDDD",
        "dark-custom": "#082032",
        "blue1-custom": "#082032",
        "yellow-custom": "#fbbf24",
        active: "#F0A500",
        "blanc-custom": "#FBFBFB",
        "bg-start": "#334756",
        "bg-end": "#dddddd",
        primary: {
          100: "#b3d9ff",
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#0B84FF",
          600: "#0073e6",
          700: "#0066cc",
          800: "#004d99",
          900: "#004080",
        },
        secondary: {
          100: "#fad5b7",
          200: "#f7ba88",
          300: "#f39e58",
          400: "#f08228",
          500: "#ed7410",
          600: "#d7690f",
          700: "#bf5d0d",
          800: "#a7510c",
          900: "#8f460a",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
