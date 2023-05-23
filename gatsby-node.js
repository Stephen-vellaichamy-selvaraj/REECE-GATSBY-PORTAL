const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

	const { createRedirect } = actions; 

  createRedirect({
    fromPath: `/about/`,
    toPath: `https://www.reece.com/about`,
    statusCode: 200,
  });   

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
    if (!node.slug == "bigdog"){
      console.log("Yes I am not here")
      actions.createPage({
        path: '/brands/'+ node.slug,
        component: path.resolve('./src/templates/brand-details.js'),
        context: { slug: node.slug }
      })
    }
    else
      {
        console.log("Yes I am here")
      }    
    )
}