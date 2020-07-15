import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from "../components/About"

// TODO JS arrow function (learn more about it later!!!)
const AboutPage = () => (
    <Layout>
        <SEO title="About Me" />
        <About />
        
    </Layout>
)

export default AboutPage