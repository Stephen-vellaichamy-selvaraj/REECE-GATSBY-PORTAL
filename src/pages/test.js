import React from "react"
import { Script } from "gatsby"
import Layout from '../components/Layout'

function MyPage() {
  return(
    <Layout>
      <Script id="first-unique-id" dangerouslySetInnerHTML={{ __html: `alert('Hello world')` }} />
      <Script src="https://reeceusa.my.salesforce.com/lightning/lightning.out.js"></Script>
      
      <Script> 
          $Lightning.use("runtime_appointmentbooking:lightningOutGuest",
              function() {                  // Callback once framework and app load
                  $Lightning.createComponent(
                      "lightning:flow",    // top-level component of your app
                      { },    // attributes to set on the component when created
                      "lexcontainer",    // the DOM location to insert the component
                      function(component) {            // API name of the Flow
                          component.startFlow("Inbound_Custom_Guest_Appointment");
                      }
                  )
              },    'https://reeceusa.my.salesforce-sites.com/'  // Site endpoint
          );
      </Script> 

      <h4>Cancel Appointment</h4> 
 
      <div id="lexcontainercancel">&nbsp;</div>
      <br />
      <br />
      <br />
      &nbsp;
      <h4>Modify Appointment</h4>
  
      <div id="lexcontainermodify">&nbsp;</div> 
 
    </Layout>
  )
}

export default MyPage
