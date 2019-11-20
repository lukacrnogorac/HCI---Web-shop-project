import React from "react"
import "./sidebar.css"

const sidebar = ({ children }) => (
  <div
    id="sidebar"
    style={{
      backgroundColor: "whitesmoke",
      borderRight: "1px solid black",
      borderLeft: "1px solid black",
    }}
  >
    <h3 style={{ textAlign: "center" }}>Categories</h3>
    <div className="category">Category1</div>
    <div className="category">Category1</div>
    <div className="category">Category1</div>
    <div className="category">Category1</div>
    <div className="category">Category1</div>
    <div className="category">Category1</div>
  </div>
)

export default sidebar
