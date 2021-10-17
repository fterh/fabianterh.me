import Card from "@mui/material/Card"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { styled } from "@mui/material/styles"
import styledComponent from "styled-components"

import { Breakpoints } from "../theme"

const ResponsiveWrapper = styledComponent(`div`)`
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

const ResponsiveCard = styled(Card)`
  padding: 10px;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 5px;
  }
`

const Image = () => {
  return (
    <ResponsiveWrapper>
      <ResponsiveCard>
        <StaticImage
          alt="avatar"
          src="../images/avatar.jpg"
          imgStyle={{ borderRadius: `5%` }}
          placeholder="blurred"
        />
      </ResponsiveCard>
    </ResponsiveWrapper>
  )
}

export default Image
