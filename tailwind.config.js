const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    // in the content prop you should put all the files
    // that are using tailwindcss classes, for example:
    // content: ["./src/**/*.js", "./public/index.html"],
    // or
    // content: ["./src/**/*.vue", "./public/index.html"],
    // or
    // content: ["./src/**/*.jsx", "./public/index.html"],
    content: ["./index.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      ...colors,
      current: "current",
      transparent: "transparent",
      brand: {
        green: {
          dark: "#3F7D20",
          light: "#72B01D",
        },
        blue: "#246EB9",
        orange: "#F06543",
        white: "#F3EFF5",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [require("@tailwindcss/forms")],
};
