const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  // const { data } = await graphql(`
  //   query Articles {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/projects/'+ node.frontmatter.slug,
  //     component: path.resolve('./src/templates/project-details.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })

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