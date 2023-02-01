/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/assets/svgs/favicon.svg"
            }
        }
    ]
};
