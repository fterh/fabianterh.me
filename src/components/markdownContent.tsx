import { Card, Typography } from "@mui/material"
import React from "react"

import themeMaterial from "../themeMaterial"

export default (props: { htmlContent: string }) => {
  return (
    <Card
      sx={{
        border: `0`,
        boxShadow: `none`,
      }}
    >
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: props.htmlContent }}
        sx={{
          marginBottom: `1rem`,
          a: {
            color: themeMaterial.palette.primary.dark,
            ":hover": {
              color: themeMaterial.palette.primary.light,
            },
          },
        }}
      />
    </Card>
  )
}
