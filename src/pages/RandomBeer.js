import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import homeBeer from "../homeBeer.png"

const RandomBeer = ({ }) => {
    console.log("HERE")
    return (
    <div>
       <Navbar bg="dark">
        <Container>
          <Navbar.Brand ><Link to="/">
            <img
              src={homeBeer}
              width="30"
              height="30"
              className="d-inline-block align-top"
              /></Link>
              </Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    );
};

export default RandomBeer;