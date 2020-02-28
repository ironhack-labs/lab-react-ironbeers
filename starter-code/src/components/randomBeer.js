import React, { Component } from "react";

import BeersServices from "../../src/services/beers.services";

import BeerCardDetails from "./BeerCardDetails";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

class randomBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
      //showmodal: false
    };
    this.services = new BeersServices();
  }

  componentDidMount = () => this.getrandomBeers();

  getrandomBeers = () => {
    this.services
      .getrandomBeers()
      .then(randomBeers => this.setState({ beers: randomBeers }))
      .catch(err => console.log(err));
  };

  //   closeModal = () => this.setState({ showmodal: false });
  //   openModal = () => this.setState({ showmodal: true });

  render() {
    return (
      <Container>
        <h1>Beers</h1>

        {/* <Button className="mb-20" variant="dark" onClick={this.openModal}>
          Crear Montaña rusa
        </Button> */}

        <Row>
          {this.state.beers.map(elm => (
            <BeerCardDetails key={elm._id} {...elm} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default randomBeers;
