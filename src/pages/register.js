import React from "react"
import { Button, Form } from "react-bootstrap"
import Layout from "../components/layout"

export const RegisterPage = () => {
  return (
    <Layout>
      <Form
        style={{
          margin: "0 auto",
          position: "relative",
          top: "35%",
        }}
      >
        <Form.Group controlId="formBasicFirstname">
          <Form.Label>First name</Form.Label>
          <Form.Control type="name" placeholder="First name" />
        </Form.Group>
        <Form.Group controlId="formBasicLastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="name" placeholder="Last name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email address" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Register
        </Button>
      </Form>
    </Layout>
  )
}

export default RegisterPage
