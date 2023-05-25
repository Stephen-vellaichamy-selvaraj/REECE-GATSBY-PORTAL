const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {   
  
  //Redirects
  const { createRedirect } = actions
  createRedirect({ 
    fromPath: '/register/', 
    toPath: 'https://www.reece.com/register'
  })

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