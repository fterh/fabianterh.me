import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Theme from "../theme"

const Header = styled.header`
  width: 100%;
  border-bottom: 2px solid ${Theme.colors.headerBorder};

  div {
    max-width: 960px;
    margin: 0 auto;
    padding: ${Theme.paddings.header};

    h2 {
      font-size: 1.2rem;
      margin: 0;

      a {
        color: ${Theme.colors.text};
        text-decoration: none;
      }
    }
  }
`

const _Header = ({ siteTitle }) => (
  <Header>
    <div>
      <h2 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h2>
    </div>
  </Header>
)

_Header.propTypes = {
  siteTitle: PropTypes.string,
}

_Header.defaultProps = {
  siteTitle: ``,
}

export default _Header
