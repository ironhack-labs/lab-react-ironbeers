/*
 * Setup.
 */
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MyNav.css";

/*
 * Main.
 */
function MyNav() {
  return (
    <Navbar className="myNavbar justify-content-center">
      <Nav className="myNav">
        <Link to="/">Home</Link>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Random</Link>
        <Link to="/new-beer">New</Link>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
