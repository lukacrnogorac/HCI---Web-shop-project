import React from "react"
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap"

export const Header = ({ children }) => (
<div className="navigation" style={{backgroundColor: "#28395c", marginBottom: "10px"}}>
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "4px",
      }}
    >
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/" eventKey="Home" style={{color: "white"}}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="About" href="/about" style={{color: "white"}}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="News" href="/news" style={{color: "white"}}>
            News
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-end" style={{ marginRight: "10px" }}>
        <Nav.Item>
          <Button variant="secondary" style={{ width: "110px", backgroundColor: "#203765", borderColor: "#152442" }}>
            Log in
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="primary"
            style={{ marginLeft: "10px", width: "110px", backgroundColor: "#203765", borderColor: "#152442" }}
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
        height: "7vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="logo.jpg"
        width="60px"
        height="60px"
        alt="logo"
        style={{ padding: "5px", borderRadius: "50%" }}
      />
      <InputGroup
        className="mb-3"
        style={{ marginLeft: "5px", width: "250px"}}
      >
        <FormControl placeholder="Search for product" />
      </InputGroup>
    </div>
    </div>
)
    
export default Header