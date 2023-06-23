const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {   
  
  //Redirects
  const { createRedirect } = actions
  createRedirect({ 
    fromPath: `/register/`, 
    toPath: `https://www.reece.com/register/`,
    statusCode: 200,
  })

  //Contentful Static Pages
  const contenfulCollection  = await graphql(`
    query BrandPage {
      allContentfulPageBrands {
        nodes {
          brandsSelection {
            slug
          }
        }
      }
    }
  `).then(result => {
      result.data.allContentfulPageBrands.nodes[0].brandsSelection.forEach(node => {
        actions.createPage({
          path: `/brands/${node.slug}`,
          component: path.resolve('./src/templates/brand-details.js'),
          context: { slug: node.slug },
        }); 
      });               
    })

    // Product service static pages
    const productcollection = await graphql(`
      query MyQuery {
        ReeceAPI {
          allProducts {
            id
          }
        }
      }
      `).then(result => {
        result.data.ReeceAPI.allProducts.forEach(node => {
            actions.createPage({
            path: `/products/${node.id}`,
            component: path.resolve('./src/templates/product-detail-page.js'),
            context: { id: node.id }
          }); 
        });               
      })    

    return Promise.all([contenfulCollection, productcollection])
  }
  
