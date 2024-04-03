/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cornflowerblue: "#2c9cf0",
        white: "#fff",
        black: "#000",
        gainsboro: "#dfdfdf",
        darkslategray: "#3b3e47",
        teal: "#006555",
        gray: "#292b32",
        dodgerblue: "#738fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
    },
    fontSize: {
      sm: "14px",
      "smi-8": "12.8px",
      xs: "12px",
      mid: "17px",
      "smi-7": "12.7px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
