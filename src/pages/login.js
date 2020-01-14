import React from "react"
import Layout from "../components/layout"
import { Button, Form, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons"

export const LoginPage = () => {
  return (
    <Layout>
      <Form
        style={{
          margin: "0 auto",
          //maxWidth: "320px",
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
              <Nav.Link href="/" style={{position: "absolute", left: "100%", padding: "0px 5px"}}>
                <FontAwesomeIcon id="cancelIcon" icon={faTimes} style={{color: "#212529"}}/>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h1 style={{marginTop: "5px"}}>Log in</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{marginBottom: "2px"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{marginBottom: "2px"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Log In
            </Button>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", padding: "5px"}}>
              <div>Not a member yet?</div>
              <Nav.Link href="/register/" style={{padding: "0px 0px 0px 5px"}}>Register</Nav.Link>
            </div>
          </Form>
      </Form>
    </Layout>
  )
}

export default LoginPage
