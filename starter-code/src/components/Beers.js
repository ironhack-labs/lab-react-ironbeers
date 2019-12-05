import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Service from "../Service/Beer.service";
import NavbarHome from "./Navbar";
import { Link } from "react-router-dom";
import BeerCard from "./beerCard";

class Beers extends Component {
  constructor() {
    super();
    this.state = { beer: [] };
    this.service = new Service();
  }
  componentDidMount = () => this.updateBeerList();

  updateBeerList = () => {
    this.service
      .getAllBeers()
      .then(allBeersFromDB => this.setState({ beer: allBeersFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <>
        <NavbarHome />
        <Container>
          <br></br>
          <img src="../images/beers.png" alt="Beers" />
          <br></br>
          <p>blablabla</p>
          <br></br>
          <Link to="/form">Add Beer</Link>
          <br></br>
          <Link to="/">Home</Link> <br></br>
          <Link to="/random-beer">Random Beer</Link> <br></br>
          <Link to="/new-beer">New Beer</Link> <br></br>
          <h1> List of Beers</h1>
          <Row>
            {this.state.beer.map((beer, idx) => (
              <BeerCard key={idx} {...beer} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Beers;
