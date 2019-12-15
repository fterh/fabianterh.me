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

const _Footer = () => (
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
)

export default _Footer
