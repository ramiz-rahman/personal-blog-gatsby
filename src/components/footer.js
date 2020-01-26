import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const author = data.site.siteMetadata.author
  return (
    <footer className={styles.footer}>
      <p>Created by {author}, © 2019</p>
    </footer>
  )
}

export default Footer
