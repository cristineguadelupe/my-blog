const postsQuery = `{
    posts: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                        date(locale: "en-us", formatString: "MMMM-DD-YYYY")
                        description
                        title
                    }
                }
            }
        }
        `
