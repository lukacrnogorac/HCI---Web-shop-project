import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"
import { Card, Button } from "react-bootstrap"

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <Sidebar />
      <div className="content">
        <FeaturedProduct featuredProduct={data.allFile.edges[0]} />
        <FeaturedCategory
          featuredCategories={
            data.allFile.edges /* create query for featuredCategory.. */
          }
        />
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
    <Card style={{ display: "grid", gridTemplateColumns: "0.5fr 1fr" }}>
      <Img
        key={featuredProduct.node.id}
        fluid={featuredProduct.node.childImageSharp.fluid}
        className="customImage"
        style={{
          height: "280px",
          width: "280px",
          margin: "7.5px",
          border: "1px solid black",
        }}
      />
      <Card.Body
        style={{ display: "grid", gridTemplateRows: "0.2fr 0.8fr 0.2fr" }}
      >
        <Card.Title>Featured Product</Card.Title>
        <Card.Text>
          This is our main product of this month. We offer you great deal if you
          take this product from our company. This is our main product of this
          month. We offer you great deal if you take this product from our This
          is our main product of this month. We offer you great deal if you take
          this product from our company. This is our main product of this month.
          We offer you great deal if you take this product from our This is our
          main product of this month. We offer you great deal if you take this
          product from our company. This is our main product of this month. We
          offer you great deal if you take this product from our This is our
          main product of this month. We offer you great deal if you take this
          product from our company.
        </Card.Text>
        <div
          className="something"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Card.Subtitle>XX.XX€</Card.Subtitle>
          <Button variant="secondary" style={{}}>
            Purchase
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export const FeaturedCategory = () => {
  return <div></div>
}
