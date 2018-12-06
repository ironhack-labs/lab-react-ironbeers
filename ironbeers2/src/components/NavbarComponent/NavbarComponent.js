import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>
              <a className='home' href="#home">IronBeers</a>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
