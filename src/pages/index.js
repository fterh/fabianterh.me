import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
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
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
`

const Card = styled.h3`
  margin: 0 0 2rem 0;

  a {
    color: ${Theme.colors.primaryDark};
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      border-bottom: 3px solid ${Theme.colors.primaryDark};
    }
  }
`

const IndexPage = () => {
  return (
    <Layout centered>
      <SEO title="Home" />
      <Section>
        <h2>Hello world.</h2>
        <Name>I'm Fabian.</Name>
        <div style={{ marginTop: `4rem` }}>
          <Card>
            <a href="https://github.com/fterh" target="_new">
              <FontAwesomeIcon
                icon={faGithub}
                color={Theme.colors.primaryDark}
              />{" "}
              Github
            </a>
          </Card>
          <Card>
            <a href="https://linkedin.com/in/fabianterh/" target="_new">
              <FontAwesomeIcon
                icon={faLinkedin}
                color={Theme.colors.primaryDark}
              />{" "}
              Linkedin
            </a>
          </Card>
          <Card>
            <a href="https://medium.com/@fabianterh" target="_new">
              <FontAwesomeIcon
                icon={faMedium}
                color={Theme.colors.primaryDark}
              />{" "}
              Blog
            </a>
          </Card>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
