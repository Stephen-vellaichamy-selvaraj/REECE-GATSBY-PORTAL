import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

const ProductDetails = ({ data }) => {
  const { name,imageUrls,productOverview,featuresAndBenefits } = data.ReeceAPI.product
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{name}</h2>
        <img src={imageUrls.large}></img>
        <h3>{productOverview}</h3>
        <h3>{featuresAndBenefits}</h3>
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
                imageUrls {
                    large
                }
                productOverview
                featuresAndBenefits                
            }
        }
    }`