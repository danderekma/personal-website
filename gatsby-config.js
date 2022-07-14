/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
        storageKey: "darkMode",
        minify: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/svgs/favicon.svg"
      }
    }
  ]
};
