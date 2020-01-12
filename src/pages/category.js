import React from "react"
import Layout from "../components/layout_with_sidebar.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar"
import { Card, Button } from "react-bootstrap"

export const Category = ({ location }) => {
  let data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//content//" } }) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  if (!location.state) {
    return <Layout></Layout>
  } else {
    const categoryModel = location.state.categoryModel
    data = data.allFile.edges
    data = data.filter(element => {
      if (element.node.absolutePath.includes(categoryModel.folderName)) {
        return element
      }
    })
    return (
      <Layout>
        <Sidebar />
        <div className = "content" 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0px 10px 10px 10px", 
            backgroundColor: "white", 
            border: "1px solid rgba(0, 0, 0, 0.125", 
            borderRadius: "5px"
            }}>
          <Card className = "searchbox" style={{height: "50px",  display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Card.Title>Search</Card.Title>
          </Card>
          <div className = "cardGrid" style={{
            margin: "10px",
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "repeat(auto-fit, minmax(274px, max-content))",
            justifyContent: "center"
            }}>
            {data.map(({ node }) => {
              return (
                <Card
                style={{overflow: "hidden"}}
                key={node.id}
              >
                <Img
                  fluid={node.childImageSharp.fluid}
                  className="customImage"
                  style={{
                    height: "220px",
                  }}
                />
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title>Product</Card.Title>
                  <Card.Text>XX.XX€</Card.Text>
                  <Button variant="secondary" style={{ width: "100%" }}>
                    Purchase
                  </Button>
                </Card.Body>
              </Card>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Category
