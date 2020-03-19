import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "/public/images/house.svg";

export const Header = () => {
  return (
    <>
      <Nav className="justify-content-center navbar" activeKey="/home">
        <Navbar.Brand href="/">
          <img
            alt="home"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Nav>
    </>
  );
};
