import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const mapEdge = edge => {
    return (
      <li key={edge.node.fields.slug} className={blogStyle.post}>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
        </Link>
      </li>
    )
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allMarkdownRemark.edges.map(mapEdge)}
      </ol>
    </Layout>
  )
}

export default BlogPage
