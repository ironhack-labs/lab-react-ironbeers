import React, { Component } from "react";
import Service from "../service/Beer.service";
import { Container, Row } from "react-bootstrap";
import BeerCard from "./BeerCard";

import { Link } from "react-router-dom";

class RandomBeer extends Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beers: []
    };
  }

  componentDidMount = () => this.updateBeersList();

  updateBeersList = () => {
    this._service
      .getRandomBeer()
      .then(aBeerFromDB => {
        this.setState({ beers: aBeerFromDB.data });
      })
      .catch(err => console.log("Error", err));
  };
  render() {
    return (
      <div>
        <section>
          <Container>
            <h1>La cerveza aleatoria es: </h1>
            {console.log(this.state.beers)}
            <Row>
              {this.state.beers.map(beers => (
                <BeerCard key={beers._id} {...beers} />
              ))}
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default RandomBeer;
