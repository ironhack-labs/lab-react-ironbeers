import React from "react";
import { Link } from "react-router-dom";

/* --- UI Framework --- */

import { Navbar, Nav } from "react-bootstrap";

/* --- Images --- */
import logo from "/public/images/house.svg";

export const Header = () => {
  return (
    <Nav className="justify-content-center navbar" activeKey="/home">
      <Navbar.Brand>
        <Link to="/">
          <img
            alt="home"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Link>
      </Navbar.Brand>
    </Nav>
  );
};
