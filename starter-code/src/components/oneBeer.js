import React, { Component } from "react";

import BeersServices from "../../src/services/beers.services";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class OneBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: {} };
    this.services = new BeersServices();
  }

  componentDidMount = () => this.getOneBeer();

  getOneBeer = () => {
    this.services
      .getOneBeer(this.props.match.params.id)
      .then(thebeer => this.setState({ beer: thebeer }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="beer-details">
        <h1>{this.state.beer.name}</h1>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <h3>Stats</h3>
            <hr></hr>
            <p>Description: {this.state.beer.description}</p>
            <p>Tagline: {this.state.beer.tagline}</p>
            <p>Creator: {this.state.beer.contributed_by}</p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <img
              src={this.state.beer.image_url}
              alt={this.state.beer.name}
            ></img>
          </Col>
        </Row>
        <Button as="div" variant="dark" size="sm">
          <Link to="/beers">Volver</Link>
        </Button>
      </Container>
    );
  }
}

export default OneBeer;
