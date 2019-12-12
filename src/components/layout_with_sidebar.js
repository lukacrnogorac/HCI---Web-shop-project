import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

export const Layout = ({ children }) => (
  <div style={{ background: "whitesmoke" }}>
    <Header />
    <div
      id="container"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <div
        id="mainContent"
        style={{
          display: "grid",
          gridTemplateColumns: "210px 1fr",
          paddingBottom: "60px",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  </div>
)

export default Layout