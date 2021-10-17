import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styledComponents from "styled-components"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"

import Avatar from "../components/avatar"
import Layout from "../components/layout"
import LinkCard from "../components/linkCard"
import MarkdownContent from "../components/markdownContent"
import SEO from "../components/seo"
import Theme, { Breakpoints, Mixins } from "../theme"

const Section = styledComponents(`div`)`
  text-align: left;
`

const Typewriter = styledComponents(`div`)`
  display: flex;
  justify-content: center;

  > div {
    text-align: ltr;
  }

  > div > h2 {
    font-family: ${Theme.typography.fontFamilyMonospace};
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

const IntroPart = styledComponents(`div`)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
  }
`

const IntroTextSection = styledComponents(`div`)`
@media (min-width: ${Breakpoints.tablet}) {
  width: 50%;
}
`

const Name = styled(Typography)`
  ${Mixins.gradientedText}
  font-family: ${Theme.typography.fontFamily};
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
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

const getMarkdownHtmlContent = (data: any, title: string) => {
  console.log(data)
  const nodes: [any] = data.allMarkdownRemark.edges
  return nodes.filter((node) => {
    console.log(node.node.frontmatter.title)
    return node.node.frontmatter.title === title
  })[0].node.html
}

const IndexPage = (props: { data: any }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <IntroPart>
          <IntroTextSection>
            <Typewriter>
              <div>
                <h2>Hello world!</h2>
              </div>
            </Typewriter>
            <Name>I&apos;m Fabian.</Name>
            <MarkdownContent
              htmlContent={getMarkdownHtmlContent(props.data, "About")}
            />
          </IntroTextSection>
          <Avatar />
        </IntroPart>

        <MarkdownContent
          title="Featured Work"
          htmlContent={getMarkdownHtmlContent(props.data, "Featured Work")}
        />

        <Card sx={{ marginTop: `2rem` }}>
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

          {/*Insert a phantom CardContent here to remove last-child styling on LinksCardContent */}
          <CardContent sx={{ display: `none` }}></CardContent>
        </Card>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
