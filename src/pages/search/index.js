import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../../components/Layout"
import * as styles from '../../styles/brands.module.css'

const products = ({data}) => {
    console.log(data)
    const products = data.ReeceAPI.searchProduct.products

    return (
        <Layout>
            <div className={styles.brands}>

                <div className={styles.brand}>
                    {
                        products.map ( product => (
                            <Link to = { "/products/" + product.id} key= {Math.random()}>
                                <div>
                                    {
                                        <img src={product.imageUrls.small} alt={"logo"}/>
                                    }
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>                                    
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default products

export const query = graphql`
query MyQuery {
    ReeceAPI {
      searchProduct(
        productSearch: {searchTerm: "pipe", page: 1, size: 24, categoryLevel: 0, categories: [], filters: [], engine: "plumbing_hvac"}
        userId: ""
        shipToAccountId: ""
      ) {
        products {
          name
          id
          partNumber
          price
          imageUrls {
            small
            large
          }
        }
      }
    }
  }`