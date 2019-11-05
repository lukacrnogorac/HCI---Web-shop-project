import React from "react"
import { Link } from "gatsby"
import "./sidebar.css"

const sidebar = ({ children }) => 
<div id="container1">
    <div id="sidebar">
        <h3>Categories</h3>
        <div className = "category">Category1</div>
        <div className = "category">Category1</div>
        <div className = "category">Category1</div>
        <div className = "category">Category1</div>
        <div className = "category">Category1</div>
        <div className = "category">Category1</div>
    </div>
    <div id="content">
        {children}
    </div>
</div>

export default sidebar