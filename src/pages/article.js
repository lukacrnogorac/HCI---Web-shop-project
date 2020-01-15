import React from "react"
import Layout from "../components/layout_with_sidebar.js"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Sidebar from "../components/sidebar"
import { Card, Button } from "react-bootstrap"

const Article = ({data, location}) => {
  if (!location.state) {
    return <Layout></Layout>
  } else {
    const article = location.state.element
    let mdx = data.mdxData.edges[0]
    mdx = mdx.node.frontmatter.data
    mdx = mdx.filter(element => {
      if (element.id === article.id) {
        return element
      }
    })
    return (
      <Layout>
        {mdx.map(element => {
          return (
            <div>
              <Card>
                <Card.Title>{element.title}</Card.Title>
                <Img
                  fluid={element.image.childImageSharp.fluid}
                  className="customImage"
                  style={{
                  //  height: "220px",
                  }}
                />
              </Card>
              <Card>
                {element.description}
              </Card>
            </div>
            )
        })}
        </Layout>
      )
    }
  }
export default Article

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
