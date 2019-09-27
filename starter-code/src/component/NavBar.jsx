import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="info" className="d-flex justify-content-center">
          <Link to="/">
            <Navbar.Brand>
              <img
                src="https://image.flaticon.com/icons/svg/25/25694.svg"
                width="30"
                height="30"
                className="align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
        </Navbar>
      </div>
    );
  }
}
