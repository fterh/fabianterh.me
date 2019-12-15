/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import "../style.css"
import Theme from "../theme"

const Background = styled.div`
  height: 100%;
  background: ${Theme.colors.background}
  );
`

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Footer = styled.footer`
  color: ${Theme.colors.footerText};
  font-family: ${Theme.typography.fontFamilyMonospace};
  font-size: ${Theme.typography.footerFontSize};
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: ${Theme.paddings.footer};
  background: ${Theme.colors.footerBackground};
`

const Layout = ({ centered, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          title_short
        }
      }
    }
  `)

  return (
    <Background>
      <Header siteTitle={data.site.siteMetadata.title_short} />
      <Body>
        <main style={centered && { textAlign: `center` }}>{children}</main>
      </Body>
      <Footer>
        Built with{" "}
        <a href="https://www.gatsbyjs.org" target="_new">
          Gatsby
        </a>
        {" & "}
        <a href="https://www.styled-components.com/" target="_new">
          styled components
        </a>
        .
      </Footer>
    </Background>
  )
}

Layout.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
