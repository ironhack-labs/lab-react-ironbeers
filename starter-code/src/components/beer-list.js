import React from "react";
import Service from "../service/beer.service";
import BeerCards from "./BeerCard";

import { Container, Row, Button, Modal } from "react-bootstrap";

class BeerList extends React.Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beers: []
    };
  }

  componentDidMount = () => this.updateBeerList();

  updateBeerList = () => {
    this._service
      .getAllBeers()
      .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <section>
        <Container>
          <h1>se desplega</h1>

          {/* <Button variant="dark" onClick={this.handleShow}>
            Nueva montaña rusa
          </Button> */}

          <Row>
            {this.state.beers.map(beer => (
              <BeerCards key={beer._id} {...beer} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default BeerList;
