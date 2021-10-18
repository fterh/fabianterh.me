import { Card, CardContent } from "@mui/material"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import React from "react"
import styledComponent from "styled-components"

import { Breakpoints } from "../theme"
import SocialLink from "./socialLink"

const ResponsiveWrapper = styledComponent(`div`)`
@media (max-width: ${Breakpoints.tablet}) {
  margin-bottom: 1rem;
}
`
const Socials = () => {
  return (
    <ResponsiveWrapper>
      <Card variant="outlined">
        <CardContent sx={{ padding: `0.5rem`, textAlign: `center` }}>
          <SocialLink icon={faGithub} url="https://github.com/fterh" />
          <SocialLink icon={faMedium} url="https://medium.com/@fabianterh" />
          <SocialLink
            icon={faLinkedin}
            url="https://linkedin.com/in/fabianterh"
          />
          <SocialLink
            icon={faFileAlt}
            url="https://docs.google.com/document/d/1Fh3vScOLEIvB2ekL8WJ9T2eCwB_8xVKgx8zSvDHxp24/"
          />
        </CardContent>

        {/* Insert ghost CardContent to block last-child padding property */}
        <CardContent sx={{ display: `none` }} />
      </Card>
    </ResponsiveWrapper>
  )
}

export default Socials
