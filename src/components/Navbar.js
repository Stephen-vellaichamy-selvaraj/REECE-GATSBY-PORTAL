import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery( graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }` 
  )

  const { title } = data.site.siteMetadata  

  return (
    <nav>
      <h1>{ title }</h1>
      <div className="links">
        <Link to="/">Home</Link>    
        {/* <a href="https://www.reece.com/about" target="_blank" rel="noopener norefferer">Register</a> */}
        <Link to="/register">Register</Link>
        <Link to="/brands">Brands</Link>
      </div>
    </nav>
  )
}
