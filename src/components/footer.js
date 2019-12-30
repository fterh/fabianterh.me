import React from "react"
import styled from "styled-components"

import Theme from "../theme"

const Footer = styled.footer`
  color: ${Theme.colors.footerText};
  font-family: ${Theme.typography.fontFamilyMonospace};
  font-size: ${Theme.typography.footerFontSize};
  text-align: center;
  width: 100%;
  bottom: 0;
  padding: ${Theme.paddings.footer};
  background: ${Theme.colors.footerBackground};

  a:hover {
    color: ${Theme.colors.primaryLight};
  }
`

export default () => (
  <Footer>
    Built with{" "}
    <span role="img" aria-label="love">
      ❤️
    </span>{" "}
    with{" "}
    <a href="https://www.gatsbyjs.org" target="_new">
      Gatsby
    </a>
    .
  </Footer>
)
