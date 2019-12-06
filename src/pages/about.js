import React from "react"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import Img from "gatsby-image"
import { Card } from "react-bootstrap"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { carouselData, aboutCards } = data
  return (
    <div>
      <Layout>
        <Carousel interval={2500}>
          {carouselData.frontmatter.carouselData.map(carousel => {
            return (
              <Carousel.Item key={carousel.id}>
                <Img
                  fluid={carousel.image.childImageSharp.fluid}
                  className="d-block w-100"
                  style={{
                    height: "400px",
                    width: "400px",
                  }}
                />
                <Carousel.Caption>
                  <h3>{carousel.title}</h3>
                  <p>{carousel.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div id="body-layout">
          <h2
            id="title"
            style={{
              marginBottom: 20,
              paddingLeft: "1.25rem",
              marginTop: "2.5rem",
            }}
          >
            Buy stuff, would ya?
          </h2>
          <div
            id="card-container"
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {aboutCards.siteMetadata.aboutData.map(
              ({ id, title, description }) => {
                return (
                  <Card key={id} style={{ border: "none" }}>
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About

export const query = graphql`
  {
    carouselData: mdx {
      frontmatter {
        carouselData {
          title
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
    aboutCards: site {
      siteMetadata {
        aboutData {
          description
          id
          title
        }
      }
    }
  }
`

export const Jumbotron = ({ Jimage }) => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  )
}
