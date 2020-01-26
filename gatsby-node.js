const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get Path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // 2. Get markdown data
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. Create new pages
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
