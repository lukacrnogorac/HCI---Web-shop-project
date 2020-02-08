import React from "react"
import { navigate } from "gatsby"
import { Button, Form, Nav } from "react-bootstrap"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet"

export const RegisterPage = () => {
  return (
    <div style={{ backgroundColor: "#EAEDED", minHeight: "100vh" }}>
      <Helmet title="Register | Web-shop" />
      <Header />
      <Form
        style={{
          margin: "0 auto",
          position: "relative",
          maxWidth: "500px",
          minWidth: "320px",
          top: "35%",
          backgroundColor: "white",
          border: "1px solid rgba(0, 0, 0, 0.125)",
          borderRadius: "5px",
          padding: "0px 50px 15px 50px",
        }}
      >
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              href="/"
              style={{ position: "absolute", right: "0%", padding: "0px 5px" }}
            >
              <FontAwesomeIcon
                id="cancelIcon"
                icon={faTimes}
                style={{ color: "#212529" }}
              />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 style={{ marginTop: "5px" }}>Register</h1>

        <div style={{ display: "flex" }}>
          <Form.Group
            controlId="formBasicFirstname"
            style={{ marginRight: "5px" }}
          >
            <Form.Label style={{ marginBottom: "2px" }}>First name</Form.Label>
            <Form.Control type="name" placeholder="First name" />
          </Form.Group>
          <Form.Group
            controlId="formBasicLastname"
            style={{ marginLeft: "5px" }}
          >
            <Form.Label style={{ marginBottom: "2px" }}>Last name</Form.Label>
            <Form.Control type="name" placeholder="Last name" />
          </Form.Group>
        </div>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{ marginBottom: "2px" }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email address" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ marginBottom: "2px" }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              navigate("/")
            }}
            style={{ width: "100%" }}
          >
            Register
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingLeft: "5px",
            }}
          >
            <div>Already registered?</div>
            <Nav.Link href="/login/" style={{ padding: "0px" }}>
              Log in
            </Nav.Link>
          </div>
        </div>
      </Form>
      <Footer />
    </div>
  )
}

export default RegisterPage
