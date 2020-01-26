import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogStyle from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const mapEdge = edge => {
    return (
      <li key={edge.node.slug} className={blogStyle.post}>
        <Link to={`/blog/${edge.node.slug}`}>
          <h2>{edge.node.title}</h2>
          <p>{edge.node.publishedDate}</p>
        </Link>
      </li>
    )
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyle.posts}>
        {data.allContentfulBlogPost.edges.map(mapEdge)}
      </ol>
    </Layout>
  )
}

export default BlogPage
