import React from "react"
import Layout from "../components/layout"
import { Button } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const News = ({ data }) => (
  <div>
    <Layout>
      <div className="newsContent" style={{ margin: "10px" }}>
        <h1>News</h1>
        {data.allFile.edges.map(({ node }) => {
          return (
            <div
              className="newsItem"
              style={{ display: "inline-flex", margin: "2.5px 5px 2.5px 5px" }}
            >
              <div
                className="singleNewsItem"
                style={{ border: "1px solid black" }}
              >
                <h4 className="newsTitle">{node.id}</h4>
                <p className="newsParagraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Button
                  variant="outline-primary"
                  style={{ marginTop: "100px", width: "200px" }}
                >
                  Read more
                </Button>
              </div>
              <div className="newsImage">
                <Img
                  key={node.id}
                  fluid={node.childImageSharp.fluid}
                  className="img-fluid"
                  style={{ height: "250px", width: "250px" }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  </div>
)

export default News

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//content/images//" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
