import React from "react"
import Layout from "../components/layout"
import { Button, Form } from "react-bootstrap"

export const LoginPage = () => {
  return (
    <Layout>
      <Form
        style={{
          margin: "0 auto",
          maxWidth: "320px",
          position: "relative",
          top: "100%",
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </Layout>
  )
}

export default LoginPage
