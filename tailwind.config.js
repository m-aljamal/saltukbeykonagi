module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        lightRed: "#E4735E",
        mainRed: "#CA523E",
        darkGray: "#141414",
        mainBlack: "#222221",
        mainWhite: "#FFFFFF",
        lightGray: "#353535",
        mainYello: "#E9AD28",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
