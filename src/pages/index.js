import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout_with_sidebar"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"
import { Card, Button } from "react-bootstrap"
import "../styles/index.css"

const IndexPage = ({ data }) => {
  const mdx = data.mdxData.edges[0].node.frontmatter.data
  return (
    <div>
      <Layout>
        <Sidebar />
        <div className="content">
          <FeaturedProduct featuredProduct={mdx[7]} />
          <FeaturedCategoryVertical
            featuredCategories={
              [
                mdx[25],
                mdx[26],
              ] /* create query for FeaturedCategoryVertical.. */
            }
          />
          <FeaturedCategoryHorizontal
            featuredCategories={[mdx[24], mdx[25], mdx[26], mdx[27]]}
          />
          {/* create query for horizontal.*/}
          <FeaturedCategoryVertical
            featuredCategories={
              [
                mdx[10],
                mdx[13],
              ] /* create query for FeaturedCategoryVertical.. */
            }
          />
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage

export const FeaturedProduct = ({ featuredProduct }) => {
  return (
    <Card id="featuredProduct" style={{}}>
      <Img
        key={featuredProduct.id}
        fluid={featuredProduct.image.childImageSharp.fluid}
        className="customImage"
        style={{
          margin: "10px",
          borderRadius: "5px",
          alignSelf: "center",
        }}
      />
      <Card.Body
        style={{
          display: "grid",
          gridTemplateRows: "0.2fr 0.8fr 0.2fr",
          padding: "0px",
        }}
      >
        <Card.Title>{featuredProduct.title}</Card.Title>
        <Card.Text>
          This is our main product of this month. We offer you great deal if you
          take this product from our company. {featuredProduct.description}
        </Card.Text>
        <div
          className="productInformations"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Card.Subtitle style={{ alignSelf: "bottom", padding: "6px 0px" }}>
            {featuredProduct.price}€
          </Card.Subtitle>
          <Button variant="secondary" style={{ alignSelf: "bottom" }}>
            Purchase
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export const FeaturedCategoryVertical = ({ featuredCategories }) => {
  //borders add for orientation
  return (
    <Card
      style={{
        display: "grid",
        gridTemplateRows: "0.1fr 0.3fr 0.3fr",
        margin: "10px",
      }}
    >
      <Card.Title style={{ margin: "10px" }}>Featured Category</Card.Title>
      {featuredCategories.map(element => {
        return (
          <Card
            key={element.id}
            style={{
              display: "grid",
              gridTemplateColumns: "0.2fr 1fr",
              border: "1px solid rgba(0, 0, 0, 0.125)",
              margin: "0px 10px 10px 10px",
              padding: "0px",
              borderRadius: "5px",
              height: "min-content",
              overflow: "hidden",
            }}
          >
            <Img
              fluid={element.image.childImageSharp.fluid}
              className="customImage"
              style={{
                height: "160px",
                width: "280px",
                margin: "0px",
              }}
            />
            <div
              className="secondPart"
              style={{
                display: "grid",
                gridTemplateRows: "0.5fr 0.47fr",
                marginLeft: "10px",
              }}
            >
              <Card.Title style={{}}>{element.title}</Card.Title>
              <div
                className="productInformations"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Card.Text style={{ padding: "6px 0px", margin: "0px" }}>
                  {element.price}€
                </Card.Text>
                <Button variant="secondary" style={{ marginRight: "5px" }}>
                  Purchase
                </Button>
              </div>
            </div>
          </Card>
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
        margin: "10px",
      }}
    >
      <Card.Title style={{ margin: "10px" }}>Featured Category</Card.Title>
      <Card.Body
        style={{
          display: "grid",
          gridTemplateColumns: "0.25fr 0.25fr 0.25fr 0.25fr",
          margin: "0px 5px 10px",
          padding: "0px",
        }}
      >
        {featuredCategories.map(element => {
          return (
            <Card
              style={{
                margin: "0px 5px",
                overflow: "hidden",
              }}
              key={element.id}
            >
              <Img
                fluid={element.image.childImageSharp.fluid}
                className="customImage"
                style={{
                  height: "220px",
                }}
              />
              <Card.Body
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.price}€</Card.Text>
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

export const query = graphql`
  {
    mdxData: allMdx {
      edges {
        node {
          frontmatter {
            data {
              category
              description
              id
              price
              title
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
      }
    }
  }
`
