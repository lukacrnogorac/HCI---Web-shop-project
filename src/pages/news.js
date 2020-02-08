import React, { useState } from "react"
import Layout from "../components/layout.js"
import { Button } from "react-bootstrap"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { Card, InputGroup, FormControl } from "react-bootstrap"
import * as JsSearch from "js-search"

const News = ({ data }) => {
  const [search, setSearch] = useState("")
  const mdx = data.mdxData.edges[0].node.frontmatter.data
  const allNews = mdx.slice(mdx.length - 25)
  const newsIndex = new JsSearch.Search("id")
  newsIndex.addIndex("category")
  newsIndex.addIndex("description")
  newsIndex.addIndex("title")
  newsIndex.addIndex("price")
  newsIndex.addDocuments(allNews)
  const newsForShow = search ? newsIndex.search(search) : allNews
  return (
    <div>
      <Layout>
        <div className="newsContent" style={{ margin: "0px 10px" }}>
          <h1 style={{ marginBottom: "5px" }}>News</h1>
          <Card
            className="searchbox"
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="searchbar" style={{ height: "38px" }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for article"
                  onKeyUp={e => {
                    setSearch(e.target.value)
                  }}
                />
              </InputGroup>
            </div>
          </Card>
          {newsForShow.map(news => {
            return (
              <div
                className="newsItem"
                key={news.id}
                style={{
                  display: "inline-flex",
                  justifyContent: "space-between",
                  margin: "0px 0px 10px 0px",
                  padding: "10px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  border: "1px solid rgba(0, 0, 0, 0.125)",
                }}
              >
                <div
                  className="newsItemLeft"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="newsItemText">
                    <h4 className="newsTitle">{news.title}</h4>
                    <p className="newsParagraph">
                      Maybe create property for news page. This is{" "}
                      <strong>{news.title}</strong>. {news.description}
                    </p>
                  </div>
                  <Button
                    variant="outline-secondary"
                    style={{ width: "200px" }}
                    onClick={() =>
                      navigate("/article-details", {
                        state: { news },
                      })
                    }
                  >
                    Read more
                  </Button>
                </div>
                <div className="newsImage">
                  <Img
                    fluid={news.image.childImageSharp.fluid}
                    className="img-fluid"
                    style={{
                      height: "250px",
                      width: "250px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default News

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
