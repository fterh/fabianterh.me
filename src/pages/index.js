import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme, { Mixins } from "../theme"

const Section = styled.div`
  padding: 5rem 1rem;

  h2 {
    font-family: ${Theme.typography.fontFamilyMonospace};
  }
`

const Name = styled.h1`
  ${Mixins.gradientedText}
  color: pink;
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
`

const IndexPage = () => {
  return (
    <Layout centered>
      <SEO title="Hello, World" />
      <Section>
        <h2>Hello, world.</h2>
        <Name>I'm Fabian.</Name>
      </Section>
    </Layout>
  )
}

export default IndexPage
