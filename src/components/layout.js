import React from "react"
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap"

export const Layout = ({ children }) => (
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
        src="logo.jpg"
        width="75px"
        height="75px"
        align="center"
        alt="logo"
        style={{ padding: "5px" }}
      />
      <InputGroup
        className="mb-3"
        style={{ marginLeft: "5px", width: "250px" }}
      >
        <FormControl placeholder="Search for product" />
      </InputGroup>
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
        className="page-footer font-small blue"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60px",
          borderTop: "1px solid black",
        }}
      >
        <div
          className="footer-copyright text-center py-3"
          style={{
            height: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src="logo.jpg"
            width="75px"
            height="75px"
            align="center"
            alt="logo"
            style={{ padding: "5px" }}
          />
          <span>&copy;by maleri$h and Barke</span>
        </div>
      </footer>
    </div>
  </div>
)

export default Layout
