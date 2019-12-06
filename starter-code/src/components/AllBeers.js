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
      beers: [],
      search: ""
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
  handleSearchChange = e => this.setState({ search: e.target.value });
  render() {
    const filterItems = () => {
      let buscar = this.state.search;
      return this.state.beers.filter(
        el => el.name.toLowerCase().indexOf(buscar.toLowerCase()) > -1
      );
    };
    return (
      <div>
        <section>
          <Container>
            <h1>Índice de Cervezas</h1>
            <Link className="btn btn-sm btn-dark" to={"/new"}>
              Añadir nueva cerveza
            </Link>
            <br></br>
            <br></br>
            <div className="form-group">
              <label htmlFor="search">Search</label>
              <input
                name="search"
                type="text"
                className="form-control"
                id="search"
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
            </div>
            <br></br>
            {console.log(this.state.beers)}
            <Row>
              {filterItems().map(beers => (
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
