import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { graphql } from "gatsby"
import React from "react"
import { styled } from "@mui/material/styles"

import Avatar from "../components/avatar"
import Layout from "../components/layout"
import LinkCard from "../components/linkCard"
import SEO from "../components/seo"
import Theme, { Breakpoints, Mixins } from "../theme"

const Section = styled(`div`)`
  font-size: 1.2rem;
  text-align: left;
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

const IntroPart = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }

  > div.text-section {
    @media (min-width: ${Breakpoints.tablet}) {
      width: 50%;
    }
  }
`

const AvatarWrapper = styled(`div`)`
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

const Name = styled(`h1`)`
  ${Mixins.gradientedText}
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
  text-align: center;
  margin: 0;
`

const LinksSection = styled(`div`)`
  margin-top: 2rem;
`

const LinksCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${Breakpoints.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const ContentSection = styled(`div`)`
  padding: 1rem 0;

  p {
    margin: 0;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout centered>
      <SEO title="Home" />
      <Section>
        <IntroPart>
          <div className="text-section">
            <div className="typewriter">
              <div>
                <h2>Hello world!</h2>
              </div>
            </div>
            <Name>I'm Fabian.</Name>
            <ContentSection
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.nodes[0].html,
              }}
            />
          </div>

          <AvatarWrapper>
            <Avatar />
          </AvatarWrapper>
        </IntroPart>

        <LinksSection>
          <Card variant="outlined">
            <LinksCardContent>
              <LinkCard icon={faMedium} url="https://medium.com/@fabianterh">
                Blog
              </LinkCard>
              <LinkCard
                icon={faTwitterSquare}
                url="https://twitter.com/fabianterh"
              >
                Twitter
              </LinkCard>
              <LinkCard icon={faGithub} url="https://github.com/fterh">
                Github
              </LinkCard>
              <LinkCard
                icon={faLinkedin}
                url="https://linkedin.com/in/fabianterh/"
              >
                Linkedin
              </LinkCard>
            </LinksCardContent>

            {/* Insert a phantom CardContent here to remove last-child styling on LinksCardContent */}
            <CardContent sx={{ display: `none` }}></CardContent>
          </Card>
        </LinksSection>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`
