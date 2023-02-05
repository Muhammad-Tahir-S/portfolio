module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/app/**/*.{js,ts,jsx,tsx}",
    ".src//pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        header: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
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
        300: "#6200A4",
        400: "#8C00E9",
        500: "#AC2FFF",
        600: "#C875FF",
        700: "#E3BAFF",
        800: "#F1DCFF",
        DEFAULT: "#11001C",
      },
    },
  },
  plugins: [],
};
