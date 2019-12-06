/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Web-shop",
    categories: [
      {
        id: 1,
        name: "Tehnika",
      },
      {
        id: 2,
        name: "Namjestaj",
      },
      {
        id: 3,
        name: "Razno",
      },
      {
        id: 4,
        name: "Sportska oprema",
      },
    ],
    aboutData: [
      {
        id: 1,
        title: "About Card number ONE",
        description:
          "Some description put inside here!Some description put inside here!Some description put inside here!",
      },
      {
        id: 2,
        title: "About Card number TWO",
        description:
          "Some description put inside here!Some description put inside here!Some description put inside here!",
      },
      {
        id: 3,
        title: "About Card number THREE",
        description:
          "Some description put inside here!Some description put inside here!Some description put inside here!",
      },
      {
        id: 4,
        title: "About Card number FOUR",
        description:
          "Some description put inside here!Some description put inside here!Some description put inside here!",
      },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
