import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
    slug='/about/'
    background="black"
    category="Misc"
    date="July 11 - 2020"
    timeToRead="5"
    title="My journey to become an Elixir Alchemist"
    description="Why I chose Elixir and real time applications to completely change my career in two months"
    />
  </Layout>
)

export default IndexPage
