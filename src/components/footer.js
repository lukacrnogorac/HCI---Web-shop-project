import React from "react"
import ourLogo from "../../content/logo.jpg"

export const Footer = ({ children }) => (
  <footer
    className="page-footer font-small blue"
    style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "60px",
      borderTop: "1px solid rgba(0, 0, 0, 0.125)",
      borderLeft: "1px solid rgba(0, 0, 0, 0.125)",
      borderRight: "1px solid rgba(0, 0, 0, 0.125)",
      backgroundColor: "white",
      borderRadius: "5px 5px 0px 0px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <img
      src={ourLogo}
      width="60px"
      height="60px"
      align="center"
      alt="logo"
      style={{ margin: "0px 5px", padding: "5px", borderRadius: "50%" }}
    />
    <span style={{ alignSelf: "center", margin: "0px 5px" }}>
      &copy;by maleri$h and Barke
    </span>
  </footer>
)

export default Footer
