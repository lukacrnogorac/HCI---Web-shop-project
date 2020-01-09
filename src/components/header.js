import React from "react"
import { navigate } from "gatsby"
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap"
import "../styles/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faNewspaper,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons"
import ourLogo from "../../content/logo.jpg"

export const Header = ({ children }) => (
  <div
    className="navigation"
    style={{
      backgroundColor: "#28395c",
      height: "50px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <div className="header-left" style={{ display: "flex" }}>
      <Nav.Link href="/" style={{ padding: "0px" }}>
        <img
          src={ourLogo}
          width="50px"
          height="50px"
          alt="logo"
          style={{ padding: "5px", borderRadius: "50%" }}
        />
      </Nav.Link>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link
            href="/"
            eventKey="Home"
            style={{
              color: "white",
              height: "50px",
              padding: "0px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div id="homeText">Home</div>
            <FontAwesomeIcon id="homeIcon" icon={faHome} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="About"
            href="/about"
            style={{
              color: "white",
              height: "50px",
              padding: "0px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div id="aboutText">About</div>
            <FontAwesomeIcon id="aboutIcon" icon={faAddressCard} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="News"
            href="/news"
            style={{
              color: "white",
              height: "50px",
              padding: "0px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div id="newsText">News</div>
            <FontAwesomeIcon id="newsIcon" icon={faNewspaper} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    <div
      className="header-middle"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="searchbar" style={{ height: "38px" }}>
        <InputGroup className="mb-3">
          <FormControl placeholder="Search for product" />
        </InputGroup>
      </div>
    </div>
    <div
      className="header-right"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Nav style={{ margin: "0px 10px" }}>
        <Nav.Item>
          <Button
            variant="secondary"
            onClick={() => {
              navigate("/login")
            }}
            style={{
              width: "110px",
              backgroundColor: "#203765",
              borderColor: "#152442",
            }}
          >
            Log in
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            variant="primary"
            style={{
              marginLeft: "10px",
              width: "110px",
              backgroundColor: "#203765",
              borderColor: "#152442",
            }}
          >
            Register
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  </div>
)

export default Header
