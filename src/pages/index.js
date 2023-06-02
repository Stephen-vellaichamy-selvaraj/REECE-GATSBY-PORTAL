import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Home Page
export default function Home({data}) {
  const image = getImage(data.allContentfulSiteSettings.edges[0].node.coverImage);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{data.allContentfulSiteSettings.nodes[0].title}</h2>
          <h3>{data.allContentfulSiteSettings.nodes[0].subTitle}</h3>
          <p>Reece Business to customer website</p>
          <Link className={styles.btn} to="/brands">Brands</Link>
        </div>
        <GatsbyImage image={image} alt="blog image" layout="fixed" width={1000} height={1000}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulSiteSettings {
    nodes {
      title
      subTitle
    }
    edges {
      node {
        coverImage {
          gatsbyImageData(width:1000)
        }
      }
    }
  }
}
`