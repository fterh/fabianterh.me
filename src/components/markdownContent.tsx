import { Card, Typography } from "@mui/material"
import React from "react"
import { styled } from "@mui/material/styles"

import { Mixins } from "../theme"
import themeMaterial from "../themeMaterial"

const Title = styled(Typography)`
  ${Mixins.gradientedText}
  font-weight: bold;
` as typeof Typography

const MarkdownContent = (props: { htmlContent: string; title?: string }) => {
  return (
    <Card
      sx={{
        border: `0`,
        boxShadow: `none`,
      }}
    >
      {props.title && (
        <Title component="h2" variant="h5">
          {props.title}
        </Title>
      )}

      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: props.htmlContent }}
        sx={{
          marginBottom: `1rem`,
          a: {
            color: themeMaterial.palette.primary.dark,
            textDecoration: `none`,
            ":hover": {
              textDecoration: `underline`,
            },
          },
        }}
      />
    </Card>
  )
}

export default MarkdownContent
