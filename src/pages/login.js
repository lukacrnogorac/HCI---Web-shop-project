import React, { useState } from "react"
import { navigate } from "gatsby"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import { Button, Form, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Helmet } from "react-helmet"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [passwordLength, setPasswordLength] = useState(0)
  return (
    <div style={{ backgroundColor: "#EAEDED", minHeight: "100vh" }}>
      <Helmet title="Login | Web-shop" />
      <Header />
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          margin: "0 auto",
          marginTop: "50px",
          paddingTop: "10px",
        }}
      >
        <Form
          style={{
            margin: "0 auto",
            width: "320px",
            position: "relative",
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
                style={{
                  position: "absolute",
                  right: "0%",
                  padding: "0px 5px",
                }}
              >
                <FontAwesomeIcon
                  id="cancelIcon"
                  icon={faTimes}
                  style={{ color: "#212529" }}
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h1 style={{ marginTop: "5px" }}>Log in</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ marginBottom: "2px" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ marginBottom: "2px" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={e => {
                setPasswordLength(e.target.value.length)
              }}
            />
          </Form.Group>
          <div>
            <Button
              variant="primary"
              type="submit"
              onClick={e => {
                e.preventDefault()
                if (passwordLength > 0 && email.length > 0) {
                  return navigate("/")
                } else {
                  return alert("You must enter valid email and password")
                }
              }}
              style={{ width: "100%" }}
            >
              Log In
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <div>Not a member yet?</div>
              <Nav.Link
                href="/register/"
                style={{ padding: "0px 0px 0px 5px" }}
              >
                Register
              </Nav.Link>
            </div>
          </div>
        </Form>
        <Footer />
      </div>
    </div>
  )
}

export default LoginPage
