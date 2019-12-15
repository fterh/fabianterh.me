import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"

const Section = styled.div`
  padding: 5rem 1rem;

  h1 {
    font-family: ${Theme.typography.fontFamily};
    font-size: 3rem;
  }

  h2 {
    font-family: ${Theme.typography.fontFamilyMonospace};
  }
`

const IndexPage = () => {
  return (
    <Layout centered>
      <SEO title="Hello, World" />
      <Section>
        <h2>Hello, world.</h2>
        <h1>I'm Fabian.</h1>
      </Section>
    </Layout>
  )
}

export default IndexPage
