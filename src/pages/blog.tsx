import { Card, CardContent, Link, Typography } from "@mui/material"
import { graphql } from "gatsby"
import React from "react"
import { styled } from "@mui/material/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"

// Wrap to use semantic element attribute `postDate`
const _PostDate = styled(`time`)`
  font-family: ${Theme.typography.fontFamilyMonospace};
`
const PostDate = (props: { children: JSX.Element; postDate: string }) => {
  return <_PostDate dateTime={props.postDate}>{props.children}</_PostDate>
}

const PostTag = styled(`span`)`
  font-family: ${Theme.typography.fontFamilyMonospace};
  font-size: 0.85rem;
`

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
        personal projects on topics I couldn't find clear answers to. Today, I
        write broadly about things I believe will add value to the world 🌎.
      </Typography>
      {posts.map((_post: any) => {
        const post = _post.node
        const tags: { name: string }[] = post.virtuals.tags

        return (
          <Card variant="elevation" sx={{ marginBottom: 1 }}>
            <CardContent>
              <Typography
                component={PostDate}
                postDate="{post.firstPublishedAt}"
              >
                {post.firstPublishedAt}
              </Typography>

              <Typography
                component={`h2`}
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
