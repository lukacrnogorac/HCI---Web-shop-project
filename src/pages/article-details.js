import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Card, Form } from "react-bootstrap"

const ArticleDetails = ({ location }) => {
  if (!location.state) {
    return <Layout></Layout>
  } else {
    const item = location.state.news
    return (
      <Layout>
        <div key={item.id}>
          <Card
            id="articleDetail"
            style={{ margin: "0 10px 10px", padding: "10px" }}
          >
            <h1 style={{ marginBottom: "10px" }}>{item.title}</h1>
            <div className="image-container">
              <Img
                fluid={item.image.childImageSharp.fluid}
                className="customImage"
                style={{
                  maxHeight: "480px",
                  maxWidth: "480px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="authorInfo" style={{ marginTop: "10px" }}>
              <Card.Title>Author Authorized</Card.Title>
              <Card.Title>Created at: 12.01.2020</Card.Title>
              <p>
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
                {item.description} This is Description. You can add what ever
                you want. Just try it!
              </p>
            </div>
          </Card>
          <Form id="commentArea" style={{ margin: "0px 10px 0px" }}>
            <Form.Control as="textarea" placeholder="Comment..." rows="3" />
          </Form>
        </div>
      </Layout>
    )
  }
}

export default ArticleDetails
