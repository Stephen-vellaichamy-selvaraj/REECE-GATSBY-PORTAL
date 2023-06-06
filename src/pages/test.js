import React from "react"
import { Script } from "gatsby"
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

function MyPage() {
  return(
    <Layout>
      <div id="lexcontainer"></div>
      <Script src="/scripts.js" />      
    </Layout>
  )
}

export default MyPage
