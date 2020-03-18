import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "/public/images/house.svg";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <div class="nav-img">
            <img
              alt="home"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};
