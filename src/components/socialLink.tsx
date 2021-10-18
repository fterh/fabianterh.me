import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import React from "react"
import styled from "styled-components"

import Theme from "../theme"
import { config, IconProp } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

// Fix huge icon flash: https://github.com/FortAwesome/react-fontawesome/issues/234
config.autoAddCss = false

const IconWrapper = styled.span`
  margin: 0;
  padding: 0 1rem;

  a {
    color: ${Theme.colors.primaryDark};
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

export default class SocialLink extends React.Component<
  LinkCardProps,
  LinkCardState
> {
  constructor(props: { icon: IconDefinition; url: string }) {
    super(props)
    this.state = { hover: false }
  }

  render() {
    return (
      <IconWrapper>
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
            size="lg"
          />
        </a>
      </IconWrapper>
    )
  }
}
