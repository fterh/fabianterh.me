import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"

const Resume = styled.div`
  font-size: 0.9rem;
  margin: auto;
  padding: 0 ${Theme.paddings.body};
  max-width: ${Theme.layout.maxWidth};

  h2 {
    color: ${Theme.colors.primaryDark};
    font-size: 1.2rem;
    margin: 2rem 0;
  }

  h3 {
    font-size: 1rem;
    margin: 1.2rem 0;
  }

  h4 {
    font-size: 0.9rem;
    margin: 1.2rem 0;
  }

  a {
    color: ${Theme.colors.primaryDark};

    &:hover {
      color: ${Theme.colors.primary};
    }
  }

  li {
    margin: 0;

    p {
      margin: 0;
    }

    ul {
      margin-top: 0;
    }
  }
`

export default ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="Resume" />
      <Resume dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`
