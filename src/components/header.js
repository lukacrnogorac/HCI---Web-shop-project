import React from "react"
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap"

export const Header = ({ children }) => (
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
        width="60px"
        height="60px"
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
    </div>
)
    
export default Header