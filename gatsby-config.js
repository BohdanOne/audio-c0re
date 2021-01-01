module.exports = {
  siteMetadata: {
    title: "audio-c0re",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fwWWBJKFPBA2B7ODRGpb88Rnv6474rBTppxlS79LQfY",
        spaceId: "6jlat79ga4h3",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
