import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ListGroup } from "react-bootstrap"
import "./sidebar.css"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          categories {
            id
            name
          }
        }
      }
    }
  `)
  const categories = data.site.siteMetadata.categories

  return (
    <div
      id="sidebar"
      style={{
        backgroundColor: "whitesmoke",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Categories</h3>
      <ListGroup>
        {categories.map(category => {
          return (
            <ListGroup.Item
              className="categoryItem"
              action
              variant="secondary"
              key={category.id}
              style={{ margin: "5px 0px 5px 0px" }}
            >
              {category.name}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Sidebar
