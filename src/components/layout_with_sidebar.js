import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/layout_with_sidebar.css"
import { Helmet } from "react-helmet"

export const Layout = props => (
  <div id="biggestContainer" style={{ backgroundColor: "#EAEDED" }}>
    <Helmet title={props.title} defer={false} />
    <Header />
    <div
      id="container"
      style={{
        position: "relative",
        minHeight: "100vh",
        margin: "0 auto",
        marginTop: "50px",
        paddingTop: "10px"
      }}
    >
      <div
        id="mainContent"
        style={{
          paddingBottom: "60px",
        }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
