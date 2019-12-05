import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NavbarHome extends Component {

  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">HouseImage</Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavbarHome;
