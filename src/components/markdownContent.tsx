import { Card, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/material/styles"

import themeMaterial from "../themeMaterial"

const ContentTypography = styled(Typography)`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  a {
    color: ${themeMaterial.palette.primary.dark};

    :hover {
      color: ${themeMaterial.palette.primary.light};
    }
  }
`

const _MarkdownContent = (props: { htmlContent: string }) => {
  return (
    <Card
      sx={{
        border: `0`,
        boxShadow: `none`,
      }}
    >
      <ContentTypography
        dangerouslySetInnerHTML={{ __html: props.htmlContent }}
      ></ContentTypography>
    </Card>
  )
}

export default _MarkdownContent
