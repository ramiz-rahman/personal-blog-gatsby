import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I love creating delightful web experiences using modern languages and
        frameworks such as JavaScript & React. In my present role, which lives
        in the intersection of business and technology I’m working with both
        customers and the development team to achieve product-market fit for new
        releases that truly improve the lives of our users.
      </p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
