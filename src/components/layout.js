import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
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
      }}
    >
      <div
        id="mainContent"
        style={{ paddingBottom: "60px", gridTemplateColumns: "1fr" }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
