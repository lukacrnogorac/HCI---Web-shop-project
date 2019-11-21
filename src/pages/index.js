import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

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
              key={node.id}
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

export const FeaturedProduct = ({ featuredProduct }) => {
  return (
    <Card style={{}}>
      <Img
        key={featuredProduct.node.id}
        fluid={featuredProduct.node.childImageSharp.fluid}
        className="customImage"
        style={{ height: "250px", width: "250px" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export const FeaturedCategory = () => {
  return <div></div>
}
