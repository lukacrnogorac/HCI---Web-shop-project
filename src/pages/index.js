import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <Sidebar />
      <div className="content">
        <FeaturedProduct featuredProduct={data.allFile.edges[0]} />
        <FeaturedCategory featuredCategories={data.allFile.edges} />
        {data.allFile.edges.map(({ node }) => {
          return (
            <div
              className="item"
              style={{ marginBottom: "0.2px", borderBottom: "1px solid black" }}
            >
              <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                className="customImage"
                style={{ height: "250px", width: "250px" }}
              />
            </div>
          )
        })}
      </div>
      <div></div>
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//content/images//" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const FeaturedProduct = ({ props }) => {
  return <div></div>
}

export const FeaturedCategory = () => {
  return <div></div>
}
