import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      alt="avatar"
      src="../images/avatar.jpg"
      imgStyle={{ borderRadius: `5%` }}
      placeholder="blurred"
    />
  )
}

export default Image
