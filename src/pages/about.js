import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  )
}

export default AboutPage
