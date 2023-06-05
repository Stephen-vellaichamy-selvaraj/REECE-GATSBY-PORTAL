module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        spaceId: 'qllwu7j6zru5',
        accessToken: 'pS3JGNOz9VhomeADNnGkOEF-G8ioMasOA35P_HRJ2sI',
        environment:'master',
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
        options: {
          src: 'https://reeceusa.my.salesforce-sites.com/lightning/lightning.out.js', // Change to the script filename
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