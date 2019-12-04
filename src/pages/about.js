import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"

const About = ({ data }) => (
  <div>
    <Layout>
      <Jumbotron></Jumbotron>
        {/* <div className="community"> 
        {data.allFile.edges.map(({ node }) => {
          return (
            <Img
              key={node.id}
              fluid={node.childImageSharp.fluid}
              className="aboutImage"
            />
          )
        })}
      </div>  */} 
    <div id="body-layout">
      <h2 id="title" style={{marginBottom: 20}}>Buy stuff, would ya?</h2>
      <div id="card-container" style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        gridTemplateColumns: "1fr 1fr",
      }}>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>  
    </Layout>
  </div>
)

export default About

export const query = graphql`
  {
    allFile(
      filter: {
        absolutePath: { regex: "//content/images//" }
        relativePath: { in: ["images/about.jpg"] }
      }
    ) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export const Jumbotron = ({ Jimage }) => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  )
}