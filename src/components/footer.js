import React from "react"
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap"

export const Footer = ({ children }) => (
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
            width="60px"
            height="60px"
            align="center"
            alt="logo"
            style={{ padding: "5px" }}
          />
          <span>&copy;by maleri$h and Barke</span>
        </div>
      </footer>
)

export default Footer