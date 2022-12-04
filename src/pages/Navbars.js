import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import homeBeer from "../homeBeer.png"
import { Link } from "react-router-dom";

function Navbars () {
    return (
    <>
       <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
            <img
              src={homeBeer}
              width="60"
              height="60"
              className="d-inline-block align-top"
              />
              </Link>
              </Navbar.Brand>
            </Container>
        </Navbar>
    </>
    );
};

export default Navbars;