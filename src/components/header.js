import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Theme, { Mixins } from "../theme"

const Header = styled.header`
  width: 100%;
  border-bottom: 2px solid ${Theme.colors.border};
  margin-bottom: 4rem;

  nav {
    max-width: 960px;
    margin: 0 auto;
    padding: ${Theme.paddings.header};
  }
`

const NavItem = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  padding: 0 1rem;
  display: inline;

  a {
    ${(props) =>
      props.gradiented
        ? `${Mixins.gradientedText}`
        : `color: ${Theme.colors.text};`}
    text-decoration: none;

    &.active,
    &:hover {
      color: ${Theme.colors.primary};
      border-bottom: 2px solid ${Theme.colors.primary};
    }
  }
`

const _Header = ({ siteTitle }) => (
  <Header>
    <nav>
      <NavItem gradiented>
        <Link to="/">{siteTitle}</Link>
      </NavItem>
      <NavItem>
        <Link to="/resume" activeClassName="active">
          Resume
        </Link>
      </NavItem>
    </nav>
  </Header>
)

_Header.propTypes = {
  siteTitle: PropTypes.string,
}

_Header.defaultProps = {
  siteTitle: ``,
}

export default _Header
