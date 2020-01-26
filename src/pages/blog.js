import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

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
      <li key={edge.node.fields.slug}>
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
      <ol>{data.allMarkdownRemark.edges.map(mapEdge)}</ol>
    </Layout>
  )
}

export default BlogPage
