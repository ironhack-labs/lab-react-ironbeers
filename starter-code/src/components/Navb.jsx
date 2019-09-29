import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Navb() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="primary">
        <Navbar.Brand href="/">Home</Navbar.Brand>
      </Navbar>
    </div>
  );
}
