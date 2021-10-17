import { Card, CardContent, Link, Typography } from "@mui/material"
import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"

const buildMediumUrl = (username: string, uniqueSlug: string): string => {
  const baseMediumUrl = "https://medium.com/"
  return baseMediumUrl + `@${username}/${uniqueSlug}`
}

const Page = ({ data }: { data: any }) => {
  const posts = data.allMediumPost.edges

  return (
    <Layout>
      <SEO title="Writings" />
      <Typography mb={1} variant="h1">
        Showcase of my thought bytes.
      </Typography>
      <Typography mb={1}>
        I started out writing articles on LeetCode-style questions to help me
        learn better. Later on, I ventured into technical articles on my
        personal projects on topics I couldn&apos;t find clear answers to.
        Today, I write broadly about things I believe will add value to the
        world 🌎.
      </Typography>
      {posts.map((_post: any, index: number) => {
        const post = _post.node
        const tags: { name: string }[] = post.virtuals.tags

        return (
          <Card key={index} variant="elevation" sx={{ marginBottom: 1 }}>
            <CardContent>
              <Typography
                sx={{ fontFamily: Theme.typography.fontFamilyMonospace }}
              >
                {post.firstPublishedAt}
              </Typography>

              <Typography
                component="h2"
                variant="h6"
                sx={{ fontWeight: `bold` }}
              >
                <Link
                  href={buildMediumUrl(post.author.username, post.uniqueSlug)}
                  target="_blank"
                  underline="hover"
                >
                  {post.title}
                </Link>
              </Typography>

              <Typography mb={1} variant="subtitle1">
                {post.virtuals.subtitle}
              </Typography>

              {tags.map((tag, index) => {
                const separator = index === tags.length - 1 ? "" : ", "
                return (
                  <Typography
                    key={index}
                    component="span"
                    color="text.secondary"
                    sx={{
                      fontFamily: Theme.typography.fontFamilyMonospace,
                      fontSize: `0.9rem`,
                    }}
                  >
                    #{tag.name}
                    {separator}
                  </Typography>
                )
              })}
            </CardContent>
          </Card>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMediumPost(sort: { fields: [firstPublishedAt], order: DESC }) {
      edges {
        node {
          title
          virtuals {
            subtitle
            tags {
              name
            }
          }
          uniqueSlug
          firstPublishedAt(formatString: "YYYY-MM-DD")
          author {
            username
          }
        }
      }
    }
  }
`

export default Page
