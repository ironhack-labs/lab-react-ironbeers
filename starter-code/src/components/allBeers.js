import React, { Component } from "react";
import BeerCard from "./beerCard";
import BeerForm from "./beerForm"

import { Container, Row, Button, Modal } from "react-bootstrap";
import Service from "../service/beer.service";

class AllBeers extends Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beers: [],
      showModalWindow: false
    };
  }

  componentDidMount = () => this.updateBeersList();

  updateBeersList = () => {
    this._service
      .getAllBeers()
      .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  handleShow = () => this.setState({ showModalWindow: true });
  handleClose = () => this.setState({ showModalWindow: false });

  render() {
    return (
      <section>
        <Container>
          <h1>TODAS LAS CERVEZAS</h1>

          <Button variant="dark" onClick={this.handleShow}>
            Nueva Cerveza
          </Button>

          <Row>
            {this.state.beers.map(beers => (
              <BeerCard key={beers._id} {...beers} />
            ))}
          </Row>
        </Container>

        <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Cerveza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BeerForm
              closeModalWindow={this.handleClose}
              updateBeersList={this.updateBeersList}
            />
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}

export default AllBeers;
