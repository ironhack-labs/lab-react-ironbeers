import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Beer.service";
import NavbarHome from "./Navbar";
import { Link } from "react-router-dom";


class NewBeer extends Component {
  constructor() {
    super();
    this.state = { beer: {} };
    this.service = new Service();
  }
  render() {
    return (
      <>
        <NavbarHome />
        <br></br>
        <Container>
          <br></br>
          <img src="../images/new-beer.png" alt="Beers" />
          <br></br>
          <p>blablabla</p>
          <br></br>
          <Link to="/beers">Beers</Link> <br></br>
          <Link to="/random-beer">Random Beer</Link> <br></br>
          <Link to="/">Home</Link> <br></br>
        </Container>
      </>
    );
  }
}

export default NewBeer;
