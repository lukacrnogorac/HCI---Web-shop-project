import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

export const Layout = ({ children }) => (
  <div style={{backgroundColor: "#EAEDED"}}>
    <Header />
    <div
      id="container"
      style={{
        position: "relative",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <div id="mainContent" style={{ paddingBottom: "60px",  gridTemplateColumns: "1fr" }}>
        {children}
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout
