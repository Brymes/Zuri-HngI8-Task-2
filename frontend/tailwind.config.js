module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rob: ["Roboto", "sans-serif"],
    },
    fontSize: {
      "10xl": "11rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        light: "#FFFFFF",
        DEFAULT: "#FFFFFF",
        dark: "#FFFFFF",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
