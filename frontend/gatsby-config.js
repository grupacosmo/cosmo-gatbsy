module.exports = {
  siteMetadata: {
    title: "Cosmo PK",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://strapi:1337",
        contentTypes: [],
        queryLimit: 1000,
      },
    },
  ],
};
