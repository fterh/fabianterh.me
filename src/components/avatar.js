import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <StaticImage
      alt="avatar"
      src="../images/avatar.jpg"
      style={{ borderRadius: `10px` }}
      placeholder="blurred"
    />
  )
}

export default Image
