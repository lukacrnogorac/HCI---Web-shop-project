import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const layout = ({ children }) => (
  <div id="container">
    <div className="header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/news">News</Link>
      </div>
      <div>
        <form>
          <button id="loginButton">Log in</button>
          <button id="registerButton">Register</button>
        </form>
      </div>
    </div>
    <div className="logoSearch">
      <img
        src="favicon.ico"
        width="50px"
        height="50px"
        align="center"
        alt="logo"
      />
      <input type="text" placeholder="Search" />
    </div>

    <div id="mainContent">{children}</div>

    <div className="footer">
      <div>
        <img
          src="favicon.ico"
          width="50px"
          height="50px"
          align="left"
          alt="logo"
        />
        <span>&copy; By maleri$h and Barke</span>
      </div>
    </div>
  </div>
)

export default layout
