import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Card, Form, Nav } from "react-bootstrap"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import defaultProfile from "../../content/default-profile.png"
import authorImage from "../../content/author-image.jpg"

const ArticleDetails = ({ location }) => {
  if (!location.state) {
    return <Layout></Layout>
  } else {
    const item = location.state.news
    return (
      <Layout title="Article details | Web-shop">
        <div key={item.id}>
          <Card
            id="articleDetail"
            style={{ margin: "0 10px 10px", padding: "0 10px 10px" }}
          >
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link
                  href="/news"
                  style={{ position: "absolute", right: "0%", top:"0%", padding: "0px 5px" }}
                >
                  <FontAwesomeIcon
                    id="cancelIcon"
                    icon={faTimes}
                    style={{ color: "#212529" }}
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <h1 style={{ marginBottom: "10px"}}>{item.title}</h1>
            <div id="article-content">
              <div className="articleBody" style={{ marginTop: "10px"}}>
                <div id="authorInfo" style={{display: "flex", marginBottom: "10px"}}>
                <img 
                  src={authorImage}
                  width="50px"
                  height="50px"
                  style={{padding: "0px", marginRight: "5px", borderRadius: "50%"}}
                  />
                  <div>
                    <Card.Title style={{marginBottom: "2px"}}>lerk97</Card.Title>
                    <Card.Title>12.01.2020.</Card.Title>
                  </div>
                </div>
                <p>
                  {item.description} This is Description. You can add what ever
                  you want. Just try it!
                  {item.description} This is Description. You can add what ever
                  you want. Just try it!
                  {item.description} This is Description. You can add what ever
                  you want. Just try it!
                  {item.description} This is Description. You can add what ever
                  you want. Just try it!
                </p>
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
            </div>
          </Card>
          <Card id="commentBox" style={{margin: "0 10px 10px", padding: "0 10px 10px"}}>
            <h1>Comments</h1>
            <div id="userComment" style={{display: "flex"}}>
              <img 
              src={defaultProfile}
              width="50px"
              height="50px"
              style={{padding: "5px", borderRadius: "50%"}}
              />
              <Form id="commentArea" style={{width: "100%" }}>
                <Form.Control as="textarea" placeholder="Comment..." rows="3" />
              </Form>
            </div>
            <i style={{display: "flex", justifyContent: "center", padding: "20px 0", color: "grey"}}>There doesn't seem to be anything here. Be the first to comment.</i>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default ArticleDetails
