import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"

import Theme from "../theme"

const Card = styled.h3`
  margin: 0 0 2rem 0;

  a {
    color: ${Theme.colors.primaryDark};
    font-size: 1.2rem;
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${Theme.colors.primary};
    }
  }
`

export default class LinkCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  render() {
    return (
      <Card>
        <a
          href={this.props.url}
          target="_new"
          onFocus={() => this.setState({ hover: true })}
          onMouseOver={() => this.setState({ hover: true })}
          onBlur={() => this.setState({ hover: false })}
          onMouseOut={() => this.setState({ hover: false })}
        >
          <FontAwesomeIcon
            icon={this.props.icon}
            color={
              this.state.hover ? Theme.colors.primary : Theme.colors.primaryDark
            }
          />{" "}
          {this.props.children}
        </a>
      </Card>
    )
  }
}
