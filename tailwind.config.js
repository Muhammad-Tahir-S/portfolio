module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/app/**/*.{js,ts,jsx,tsx}",
    ".src//pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      currentColor: "currentColor",
      white: {
        50: "#FFFFFF",
        100: "#FBFDFF",
        200: "#F2F7FB",
        DEFAULT: "#FFFFFF",
      },
      primary: {
        100: "#11001C",
        150: "#24003C",
        200: "#39005F",
        250: "#4E0081",
        300: "#6200A4",
        400: "#8C00E9",
        500: "#AC2FFF",
        600: "#C875FF",
        700: "#E3BAFF",
        800: "#F1DCFF",
        DEFAULT: "#11001C",
      },
      secondary: {
        100: "#EA8455",
        150: "#EC8E63",
        200: "#ED976F",
        250: "#EFA07B",
        300: "#F0A887",
        400: "#F3BA9F",
        500: "#F6CBB7",
        600: "#F9DCCF",
        700: "#FCEEE7",
        800: "#FEF6F3",
        DEFAULT: "#EA8455",
      },
      gray: {
        100: "#456697",
        200: "#B284BE",
        300: "#DE3163",

        DEFAULT: "#456697",
      },
    },
    extend: {
      boxShadow: {
        header: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      transitionProperty: {
        height: "height",
        padding: "padding",
        width: "width",
      },
      gridTemplateColumns: {
        "work-sm": "repeat(auto-fill, minmax(300px, 1fr))",
        work: "repeat(auto-fill, minmax(240px, 1fr))",
      },
    },
  },
  plugins: [],
};
