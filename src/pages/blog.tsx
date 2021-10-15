import { Card, CardContent, Typography } from "@mui/material"
import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"

const PostDate = styled.time`
  font-family: ${Theme.typography.fontFamilyMonospace};
`

const PostTitle = styled.h3`
  a {
    color: ${Theme.colors.primaryDark};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  margin-bottom: 0.4rem;
`

const PostSubtitle = styled.h4`
  color: ${Theme.colors.textSecondary};
  font-style: italic;
`

const PostTag = styled.span`
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
      <h2>Showcase of my thought bytes.</h2>
      <p>
        I started out writing articles on LeetCode-style questions to help me
        learn better. Later on, I ventured into technical articles on my
        personal projects on topics I couldn't find clear answers to. Today, I
        write broadly about things I believe will add value to the world 🌎.
      </p>
      {posts.map((_post: any) => {
        const post = _post.node
        const tags: { name: string }[] = post.virtuals.tags

        return (
          <Card variant="outlined" style={{ marginBottom: `1rem` }}>
            <CardContent>
              <PostDate dateTime={post.firstPublishedAt}>
                {post.firstPublishedAt}
              </PostDate>
              <PostTitle>
                <a
                  href={buildMediumUrl(post.author.username, post.uniqueSlug)}
                  target="_blank"
                >
                  {post.title}
                </a>
              </PostTitle>
              <PostSubtitle>{post.virtuals.subtitle}</PostSubtitle>
              {tags.map((tag, index) => {
                const separator = index === tags.length - 1 ? "" : ", "
                return (
                  <PostTag>
                    #{tag.name}
                    {separator}
                  </PostTag>
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
