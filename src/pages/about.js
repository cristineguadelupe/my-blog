import React from 'react'
import { Link } from 'gatsby'

// TODO JS arrow function (learn more about it later!!!)
const AboutPage = () => (
    <>
        <h1>About Page</h1>
        <ul>
        <li>
            <Link to="/" activeStyle={ { color: 'red' } }>Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        </ul>
    </>
)

export default AboutPage