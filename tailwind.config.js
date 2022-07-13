const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "grid-lg-light": "url('../assets/svgs/bg-grid-lg-light.svg')",
        "grid-lg-dark": "url('../assets/svgs/bg-grid-lg-dark.svg')",
        "grid-sm-light": "url('../assets/svgs/bg-grid-sm-light.svg')",
        "grid-sm-dark": "url('../assets/svgs/bg-grid-sm-dark.svg')"
      },
      fontFamily: {
        "sf-bold": ["SF Pro Rounded Bold", ...defaultTheme.fontFamily.sans],
        "sf-regular": [
          "SF Pro Rounded Regular",
          ...defaultTheme.fontFamily.sans
        ],
        "sf-light": ["SF Pro Rounded Light", ...defaultTheme.fontFamily.sans],
        "sf-thin": ["SF Pro Rounded Thin", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: "#24272E"
      }
    }
  },
  plugins: []
};
