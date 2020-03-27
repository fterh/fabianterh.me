import { Button, Card, CardContent, Grid } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../theme"
import ThemeMaterial from "../themeMaterial"

// TODO: refactor into Layout
const Resume = styled.div`
  font-size: 0.9rem;

  h2 {
    color: ${Theme.colors.primaryDark};
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 0.9rem;
  }

  p.marginless {
    margin: 0;
  }

  div.section {
    a:not(.doNotStyle) {
      color: ${Theme.colors.primaryDark};
      text-decoration: none;

      &:hover {
        color: ${Theme.colors.primary};
      }
    }

    div.experience {
      div.header {
        display: inline-block;
      }

      h3 {
        margin: 0;
      }

      p {
        margin: 0;

        &.metadata {
          color: ${Theme.colors.textSecondary};
        }
      }

      div.break {
        height: 1rem;
      }
    }
  }

  li {
    margin: 0;

    p {
      margin: 0;
    }

    ul {
      margin-top: 0;
    }
  }
`

interface ResumeSectionProps {
  children: React.ReactNode
  title: string
}

const ResumeSection = (props: ResumeSectionProps) => {
  const { children, title } = props

  return (
    <Card elevation={2} className="section">
      <CardContent>
        <h2>{title}</h2>
        {children}
      </CardContent>
    </Card>
  )
}

interface ExperienceProps {
  company: string
  role?: string
  metadata: string
  description?: string
  points: Array<string>
  url?: string
}

const Experience = (props: ExperienceProps) => {
  const { company, role, metadata, description, points, url } = props

  return (
    <div className="experience">
      <div className="header">
        <h3>
          {company}
          {role && (
            <>
              : <em>{role}</em>
            </>
          )}
        </h3>
        <p className="metadata">{metadata}</p>
      </div>
      {url && (
        <Button
          color="primary"
          href={url}
          size="small"
          style={{ float: "right" }}
          className="doNotStyle"
          target="_new"
          variant="outlined"
        >
          Link
        </Button>
      )}
      <div className="break" />
      {description && <p>{description}</p>}
      {points && (
        <ul>
          {points.map((point, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
          ))}
        </ul>
      )}
    </div>
  )
}

const TestPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <SEO title="Resume" />
      <Resume>
        <ThemeProvider theme={ThemeMaterial}>
          <div style={{ marginBottom: "1rem" }}>
            <h1 style={{ display: "inline", verticalAlign: "middle" }}>
              Resume
            </h1>
            <Button
              color="secondary"
              href="https://docs.google.com/document/d/1Fh3vScOLEIvB2ekL8WJ9T2eCwB_8xVKgx8zSvDHxp24/edit"
              size="small"
              style={{ float: "right" }}
              target="_new"
              variant="contained"
            >
              Download latest
            </Button>
          </div>

          <Grid container spacing={2}>
            {/* Left column */}
            <Grid item sm={6} xs={12}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <ResumeSection title="Background">
                    <p>
                      <strong>
                        Passionate about building amazing, delightful products
                        that make a difference ❤️.
                      </strong>
                    </p>
                    <p>
                      Open-source contributor. Writer on Medium. Intriuged by
                      tough problems, and always keen to learn.
                    </p>
                    <p>
                      I'm a self-driven, motivated, and independent learner who
                      discovered my passion for programming and software
                      engineering midway through law school. I fought to minor
                      in Computer Science (succeeded on my 3rd application) and
                      applied successfully to read two highly competitive
                      software and product engineering modules.
                    </p>
                    <p>
                      In my free time, I build and maintain side projects to
                      learn new skills and technologies.
                    </p>
                  </ResumeSection>
                </Grid>
                <Grid item>
                  <ResumeSection title="Blog">
                    <p className="marginless">
                      <a href="https://medium.com/@fabianterh" target="_new">
                        I write regularly on Medium.
                      </a>{" "}
                      My articles have been published by various publications
                      and distributed by Medium curators in a variety of topics
                      from programming to software engineering.
                    </p>
                  </ResumeSection>
                </Grid>
                <Grid item>
                  <ResumeSection title="Education">
                    <p>
                      <strong>National University of Singapore</strong>
                    </p>
                    <p>
                      Computer Science (Minor) - GPA: 4.76/5.0
                      <br />
                      Bachelor of Laws - Second-Upper Honors
                    </p>
                    <ul>
                      <li>
                        <strong>2019:</strong> Dean’s List (top 10%)
                      </li>
                      <li>
                        <strong>2015 - 2019:</strong> Ranked top 50% of cohort
                        for 4 years
                      </li>
                      <li>
                        <strong>2017:</strong> Overseas student exchange at UBC
                        (NUS-UBC Lee Foundation Student Exchange Award)
                      </li>
                      <li>
                        <strong>2015:</strong> Awarded the NUS Study Award
                      </li>
                    </ul>
                  </ResumeSection>
                </Grid>
                <Grid item>
                  <ResumeSection title="Extracurriculars">
                    <p className="marginless">
                      <strong>Teaching Courses</strong>
                    </p>
                    <ul>
                      <li>
                        <strong>2019:</strong> CS1010S Programming Methodology
                      </li>
                      <li>
                        <strong>2019: </strong> CS1010E Programming Methodology
                      </li>
                      <li>
                        <strong>2019: </strong> Code in the Community (taught
                        Python to students under a Google-sponsored initiative
                        for free coding classes)
                      </li>
                    </ul>
                    <p className="marginless">
                      <strong>
                        Singapore Law Review: Deputy Chief Editor (Journal)
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Oversaw and managed the publication of the 35th volume
                        of Asia’s oldest student-run legal journal.
                      </li>
                      <li>
                        Coordinated peer-review of articles, supervised article
                        editing teams, vetted and typeset articles for
                        publication.
                      </li>
                    </ul>
                  </ResumeSection>
                </Grid>
                <Grid item>
                  <ResumeSection title="Skills">
                    <ul>
                      <li>
                        <strong>Languages:</strong> CSS, HTML, Java, JavaScript
                        (Node.js), Python, Swift, TypeScript
                      </li>
                      <li>
                        <strong>Frameworks/libraries:</strong> Flow, iOS SDK,
                        Jest, React, Redux, Redux-Saga
                      </li>
                      <li>
                        <strong>Others:</strong> AWS, Continuous Integration
                        &amp; Delivery, Git
                      </li>
                      <li>
                        <a
                          href="https://triplebyte.com/certificate/UL6XYEA"
                          target="_new"
                        >
                          Triplebyte generalist software engineer
                        </a>
                        .
                      </li>
                    </ul>
                  </ResumeSection>
                </Grid>
              </Grid>
            </Grid>

            {/* Right column */}
            <Grid item sm={6} xs={12}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <ResumeSection title="Professional Experience">
                    <Experience
                      company="Sea (Garena)"
                      role="Software Engineering Intern (iOS)"
                      metadata="Aug - Dec 2019, Singapore"
                      description="I worked on Booyah, a mobile game live-streaming
                  application."
                      points={[
                        `Improved app responsiveness in poor network conditions.
                    Optimized multiple image downloads in a collection view by
                    implementing a priority queue to prioritize visible views.`,
                        `Designed an infinite scroll view and optimized it for
                    performance and user experience.`,
                        `Profiled the performance of data-persistence utility
                    components used across multiple teams and applications to
                    uncover bottlenecks. Presented my findings at an internal
                    knowledge-sharing session with company-wide iOS engineers.`,
                      ]}
                    />
                    <Experience
                      company="ReferralCandy"
                      role="Product Engineering Intern (Full Stack)"
                      metadata="May - Aug 2019, Singapore"
                      description="I worked on CandyBar, a digital punch card loyalty program."
                      points={[
                        `Collaborated with product managers and designers to build, QA, and release product features in weekly sprints.`,
                        `Fixed bugs, wrote tests, and improved documentation to enhance the quality of the codebase.`,
                        `Worked closely with Marketing to build new React components to improve SEO and create website content.`,
                      ]}
                    />
                    <Experience
                      company="Trampolene"
                      role="Software Engineering Intern (Front End)"
                      metadata="May - Aug 2018, Singapore"
                      points={[
                        `Conceptualized, designed, and built a single-page web application MVP from scratch using React and Redux.`,
                        `Initiated research and incorporation of new technologies (Flow, Jest, Enzyme) into the project to improve code quality.`,
                        `Wrote many functional tests to ensure the robustness of the application.`,
                      ]}
                    />
                  </ResumeSection>
                </Grid>
                <Grid item>
                  <ResumeSection title="Projects">
                    <Experience
                      company="heimdall"
                      metadata="Jan 2020 - Present"
                      points={[
                        `Self-managed email alias service built with Serverless to run on AWS (DynamoDB, Lambda, SES, S3).`,
                        `<a href="https://news.ycombinator.com/item?id=22210782" target="_new">Showcased</a> on Hacker News.`,
                      ]}
                      url="https://github.com/fterh/heimdall"
                    />
                    <Experience
                      company="rewardsmany"
                      metadata="Oct - Nov 2019"
                      description="Partnered StaffAny (a workforce management startup) to develop a prototype to improve employee performance."
                      points={[
                        `Prototyped a rewards-tracking system (integrated with an existing workforce management app) to improve employee performance by up to 5% in test users.`,
                        `Architected, built, and deployed application backend.`,
                        `Set up CI & CD pipelines; maintained and documented API routes, implemented a HTTP API wrapper over database models to integrate seamlessly with 3rd-party resources.`,
                      ]}
                    />
                    <Experience
                      company="bacon"
                      metadata="Mar - Apr 2019"
                      description="Co-developed an iOS expense tracking application."
                      points={[
                        `Implemented a powerful, efficient, and flexible transaction tagging system (vs conventional categorical classification).`,
                        `Designed and wrote the base Transaction class, the Tag Manager, and the background location notification module.`,
                        `4th most highly-voted project at NUS School of Computing 14th STePS (showcase of innovative student works).`,
                      ]}
                      url="https://github.com/cs3217-1819/final-project-cs3217-crispybacon/"
                    />
                    <Experience
                      company="sneakpeek"
                      metadata="Dec 2018 - present"
                      points={[
                        `Built a Reddit bot that monitors for news article submissions in a subreddit of >200,000 users. Fetches, formats, and posts article bodies as Reddit comments.`,
                        `Started as a personal project (3rd iteration). Currently maintained collaboratively as an open-source project.`,
                      ]}
                      url="https://github.com/fterh/sneakpeek/"
                    />
                  </ResumeSection>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Resume>
    </Layout>
  )
}

export default TestPage
