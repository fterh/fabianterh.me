import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import React from "react"
import styled from "styled-components"

import Avatar from "../components/avatar"
import Layout from "../components/layout"
import LinkCard from "../components/linkCard"
import SEO from "../components/seo"
import Theme, { Breakpoints, Mixins } from "../theme"

const Section = styled.div`
  padding: 0 1rem;

  h2 {
    font-family: ${Theme.typography.fontFamilyMonospace};
  }

  div.typewriter {
    display: flex;
    justify-content: center;
  }

  div.typewriter div {
    text-align: ltr;
  }

  div.typewriter h2 {
    margin: 0 auto 0.5rem auto;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 1s steps(12, end), blink-cursor 0.75s step-end infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-cursor {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`

const FirstPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
`

const AvatarWrapper = styled.div`
  height: 300px;
  width: 300px;
  margin-left: 50px;

  @media (max-width: ${Breakpoints.mobile}) {
    height: 200px;
    width: 200px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0;
  }
`

const Name = styled.h1`
  ${Mixins.gradientedText}
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
`

const IndexPage = () => {
  return (
    <Layout centered>
      <SEO title="Home" />
      <Section>
        <FirstPart>
          <div>
            <div className="typewriter">
              <div>
                <h2>Hello world!</h2>
              </div>
            </div>
            <Name>I'm Fabian.</Name>
          </div>
          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
        </FirstPart>
        <div style={{ marginTop: `2rem` }}>
          <LinkCard icon={faMedium} url="https://medium.com/@fabianterh">
            Blog
          </LinkCard>
          <LinkCard icon={faTwitterSquare} url="https://twitter.com/fabianterh">
            Twitter
          </LinkCard>
          <LinkCard icon={faGithub} url="https://github.com/fterh">
            Github
          </LinkCard>
          <LinkCard icon={faLinkedin} url="https://linkedin.com/in/fabianterh/">
            Linkedin
          </LinkCard>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage
