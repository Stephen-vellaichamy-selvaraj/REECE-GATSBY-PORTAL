import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProductDetails = ({ data }) => {
  const { name,imageUrls,productOverview,featuresAndBenefits } = data.ReeceAPI.product
  return (
    <Layout>
      <div className={styles.details}>
        <h2>Name:  {name}</h2><br />
        <img src={imageUrls.large}></img><br />

        {
            productOverview.split(";").map(function(item, idx) {
                return (
                    <span key={idx}>
                      <ul><li><h4>{item}</h4></li></ul>                        
                      </span>
                )
            })
        }
        <br /><h4><b>Features And Benefits:</b> {featuresAndBenefits}</h4>
      </div>
    </Layout>
  )
}
 
export default ProductDetails

export const query = graphql`
    query MyQuery($id: String!) {
        ReeceAPI {
            product(productInput: {productId: $id}) {
                id
                name
                manufacturerName
                imageUrls {
                    large
                }
                productOverview
                featuresAndBenefits                
            }
        }
    }`