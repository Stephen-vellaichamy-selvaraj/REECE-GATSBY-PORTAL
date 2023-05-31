require("dotenv").config()

module.exports = {
  plugins: [
    `gatsby-plugin-gatsby-cloud`,  
    `gatsby-plugin-image`,  
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instanced
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        host: process.env.CONTENTFUL_HOST,
      },
    },    
  ],
  siteMetadata: {
    title: 'Reece',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Reece',
    contact: 'stephen.selvaraj@mindtree.com'
  },
}