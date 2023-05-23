const path = require(`path`)

exports.createPages = async ({ actions }) => {
	const { createRedirect } = actions;

  createRedirect({
    fromPath: `/about/`,
    toPath: `https://www.reece.com/about`,
    statusCode: 200,
  });  
}

exports.createPages = async ({ graphql, actions }) => {   

  const { data } = await graphql(`
    query BrandPage {
      allContentfulPageBrands {
        nodes {
          brandsSelection {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulPageBrands.nodes[0].brandsSelection.forEach(node => {
    actions.createPage({
      path: '/brands/'+ node.slug,
      component: path.resolve('./src/templates/brand-details.js'),
      context: { slug: node.slug }
    })
  })  

}