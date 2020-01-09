import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
        {data.map(({ node }) => {
          return (
            <div key={node.id}>
              <Img
                fluid={node.childImageSharp.fluid}
                className="customImage"
                style={{
                  height: "160px",
                  width: "280px",
                  margin: "0px",
                  borderRadius: "5px",
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Category
