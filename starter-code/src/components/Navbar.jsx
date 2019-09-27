import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand>
              <Link to={"/"}>
                <img src="../../images/25694.svg" alt="logo" width="20px" />
              </Link>
            </Navbar.Brand>
          </Navbar>
        </Container>
      </div>
    );
  }
}
