import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"

import Theme from "../theme"
import { config, IconProp } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

// Fix huge icon flash: https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

const Card = styled.h3`
  margin: 0;
  padding: 0.5rem 1rem;

  a {
    color: ${Theme.colors.primaryDark};
    display: flex;
    font-size: 1.2rem;
    text-decoration: none;

    &:focus,
    &:hover {
      color: ${Theme.colors.primary};
    }
  }
`

type LinkCardProps = {
  icon: IconProp
  url: string
}

type LinkCardState = {
  hover: boolean
}

export default class LinkCard extends React.Component<
  LinkCardProps,
  LinkCardState
> {
  constructor(props: any) {
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
          />
          <span>&nbsp;</span>
          {this.props.children}
        </a>
      </Card>
    )
  }
}
