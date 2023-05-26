import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Link as GatsbyLink } from "gatsby"

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
        {/* <GatsbyLink to="/register">Register</GatsbyLink> */}
        <a href="https://www.reece.com/about" target="_blank" rel="noopener norefferer">Register</a>
        <Link to="/brands">Brands</Link>
      </div>
    </nav>
  )
}
