import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404 site not found" />
      <h1>404: Page not found</h1>
      <p>
        <Link to="\">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
