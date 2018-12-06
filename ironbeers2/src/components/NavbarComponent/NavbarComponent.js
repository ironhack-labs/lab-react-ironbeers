import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import './NavbarComponent.css'

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">IronBeers</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
