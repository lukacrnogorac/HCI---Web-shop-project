import React from "react"
import Layout from "../components/layout.js"
import { Button } from "react-bootstrap"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const News = ({ data }) => (
  <div>
    <Layout>
      <div className="newsContent" style={{ margin: "10px" }}>
        <h1 style={{ marginBottom: "5px" }}>News</h1>
        {data.allFile.edges.map(({ node }) => {
          return (
            <div
              className="newsItem"
              style={{
                display: "inline-flex",
                margin: "5px 0px",
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid rgba(0, 0, 0, 0.125)",
              }}
            >
              <div className="singleNewsItem" style={{ padding: "5px" }}>
                <h4 className="newsTitle">{node.id}</h4>
                <p className="newsParagraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Button
                  variant="outline-secondary"
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
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "5px",
                  }}
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
