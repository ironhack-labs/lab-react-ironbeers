import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <Navbar className="justify-content-center white" bg="danger">
        <Link to="/">
          <Navbar.Brand className="white">Home</Navbar.Brand>
        </Link>
      </Navbar>
    );
  }
}
