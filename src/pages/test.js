import React from "react"
import { Script } from "gatsby"
import Layout from '../components/Layout'
import Helmet from 'react-helmet'

function MyPage() {
  return(
    <Layout>
      
      {/* New Appointments */}
      <div id="lexcontainer"></div>
      <Script src="/scripts.js" />

      {/* Manage Appointments */}
      <h4>Cancel Appointment</h4> 
      
      <div id="lexcontainercancel">&nbsp;</div>
      <br />
      <br />
      <br />
      &nbsp;
      <h4>Modify Appointment</h4>
        
      <div id="lexcontainermodify">&nbsp;</div> 
 
      <Script src="/manageappointments.js" />           
    </Layout>
  )
}

export default MyPage
