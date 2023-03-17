/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-dark-mode",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images`
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
