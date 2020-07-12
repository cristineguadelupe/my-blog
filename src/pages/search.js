import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

// TODO JS arrow function (learn more about it later!!!)
const SearchPage = () => (
    <Layout>
        <SEO title="Search" />
        <Search />
        
    </Layout>
)

export default SearchPage