import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout_sidebar"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"
import { Card, Button } from "react-bootstrap"

//created a kind of version page, we need to modify and fix up it

const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <Sidebar />
      <div className="content">
        <FeaturedProduct featuredProduct={data.allFile.edges[0]} />
        <FeaturedCategoryVertical
          featuredCategories={
            [
              data.allFile.edges[1],
              data.allFile.edges[2],
            ] /* create query for FeaturedCategoryVertical.. */
          }
        />
        <FeaturedCategoryHorizontal featuredCategories={data.allFile.edges} />
        {/* create query for horizontal.*/}
        <FeaturedCategoryVertical
          featuredCategories={
            [
              data.allFile.edges[0],
              data.allFile.edges[3],
            ] /* create query for FeaturedCategoryVertical.. */
          }
        />
      </div>
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
  {
    allFile(
      filter: { absolutePath: { regex: "//content/images//" } }
      limit: 4
    ) {
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
          height: "360px",
          width: "520px",
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
          className="productInformations"
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

export const FeaturedCategoryVertical = ({ featuredCategories }) => {
  console.log(featuredCategories)
  //borders add for orientation
  return (
    <Card
      style={{
        display: "grid",
        gridTemplateRows: "0.1fr 0.3fr 0.3fr",
        border: "2px solid blue",
      }}
    >
      <Card.Title>Featured Category</Card.Title>
      {featuredCategories.map(({ node }) => {
        return (
          <Card.Body
            key={node.id}
            style={{
              display: "grid",
              gridTemplateColumns: "0.2fr 1fr",
              border: "1px solid green",
              marginBottom: "12.5px",
            }}
          >
            <Img
              key={node.id}
              fluid={node.childImageSharp.fluid}
              className="customImage"
              style={{
                height: "160px",
                width: "280px",
                margin: "7.5px",
                border: "1px solid black",
              }}
            />
            <div
              className="secondPart"
              style={{
                display: "grid",
                gridTemplateRows: "0.5fr 0.47fr",
                marginLeft: "7.5px",
              }}
            >
              <Card.Title>Product</Card.Title>
              <div
                className="productInformations"
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
            </div>
          </Card.Body>
        )
      })}
    </Card>
  )
}

export const FeaturedCategoryHorizontal = ({ featuredCategories }) => {
  return (
    <Card
      style={{
        display: "grid",
        border: "2px solid blue",
      }}
    >
      <Card.Title>Featured Category</Card.Title>
      <Card.Body
        style={{
          display: "grid",
          gridTemplateColumns: "0.25fr 0.25fr 0.25fr 0.25fr",
          margin: "22.5px",
        }}
      >
        {featuredCategories.map(({ node }) => {
          return (
            <Card
              style={{
                border: "1px solid black",
                marginRight: "15px",
              }}
            >
              <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                className="customImage"
                style={{
                  border: "1px solid black",
                  height: "220px",
                }}
              />
              <Card.Body>
                <Card.Title>Product</Card.Title>
                <Card.Text>XX.XX€</Card.Text>
                <Button variant="secondary" style={{ width: "100%" }}>
                  Purchase
                </Button>
              </Card.Body>
            </Card>
          )
        })}
      </Card.Body>
    </Card>
  )
}
