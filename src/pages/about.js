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
        <div className = "aboutContent" style={{margin: "0px 10px"}}>
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
                    borderRadius: "5px",
                    border: "1px solid rgba(0, 0, 0, 0.125)",
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
        <div
          id="body-layout"
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "10px 0px",
            minHeight: "500px",
            display: "flex",
            border: "1px solid rgba(0, 0, 0, 0.125)",
          }}
        >
          <h2
            id="title"
            style={{
              margin: "10px",
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
                  <Card key={id} style={{ border: "none", margin: "10px" }}>
                    <Card.Body style={{ padding: "0px" }}>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            )}
          </div>
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
