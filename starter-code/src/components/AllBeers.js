import React, { Component } from "react";
import Service from "../service/Beer.service";
import { Container, Row } from "react-bootstrap";
import BeerCard from "./BeerCard";

import { Link } from "react-router-dom";

class AllBeers extends Component {
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
      .getAllBeers()
      .then(allBeersFromDB => {
        console.log("soy yo");
        this.setState({ beers: allBeersFromDB.data });
      })
      .catch(err => console.log("Error", err));
  };
  render() {
    return (
      <div>
        <section>
          <Container>
            <h1>Índice de Cervezas</h1>
            <Link className="btn btn-sm btn-dark" to={'/new'}>
              Añadir nueva cerveza
            </Link>
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

export default AllBeers;
