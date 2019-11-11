import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Img from "gatsby-image"

const IndexPage = ({ data }) => 
    <div>
        <Layout>
            <Sidebar>
              {data.allFile.edges.map(( { node }) => {
                return <Img key={node.id} 
                fluid={node.childImageSharp.fluid}
                className="customImage" />
            })}
            </Sidebar>
            <div>
            </div>
        </Layout>
    </div>

export default IndexPage

export const query = graphql`
  {
    allFile(filter: {absolutePath: {regex: "//content/images//"}}) {
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