import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

const About = ({ data }) => (
  <div>
    <Layout>
      <div className="community">
        {data.allFile.edges.map(({ node }) => {
          return (
            <Img
              key={node.id}
              fluid={node.childImageSharp.fluid}
              className="aboutImage"
            />
          )
        })}
      </div>
    </Layout>
  </div>
)

export default About

export const query = graphql`
  {
    allFile(
      filter: {
        absolutePath: { regex: "//content/images//" }
        relativePath: { in: ["images/about.jpg"] }
      }
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
