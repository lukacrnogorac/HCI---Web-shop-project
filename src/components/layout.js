import React from "react"
import { Nav, Button } from "react-bootstrap"

export default ({ children }) => (
  <div className="navigation">
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "4px",
      }}
    >
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/" eventKey="Home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="About" href="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="News" href="/news">
            News
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-end" style={{ marginRight: "15px" }}>
        <Nav.Item>
          <Button variant="outline-primary" style={{ width: "110px" }}>
            Log in
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="primary"
            style={{ marginLeft: "40px", width: "110px" }}
          >
            Register
          </Button>
        </Nav.Item>
      </Nav>
    </div>
    <div
      className="logoSearch"
      style={{
        display: "flex",
        height: "10vh",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
      }}
    >
      <img
        src="favicon.ico"
        width="50px"
        height="50px"
        align="center"
        alt="logo"
        style={{ padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Search"
        style={{ marginLeft: "5px", width: "250px" }}
      />
    </div>
    <div id="container" style={{ position: "relative", minHeight: "100vh" }}>
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
      <footer
        class="page-footer font-small blue"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60px",
          borderTop: "1px solid black",
        }}
      >
        <div
          class="footer-copyright text-center py-3"
          style={{ height: "20px" }}
        >
          © 2018 Copyright:
          <span>By maleri$h and Barke</span>
        </div>
      </footer>
    </div>
  </div>
)
