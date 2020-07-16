import React, { Component } from 'react';

import BeerService from '../../service';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class BeerRandom extends Component {
  constructor() {
    super();
    this.state = {
      image_url: '',
      name: '',
      tagline: '',
      description: '',
      contributed_by: '',
    };
    this.beerService = new BeerService();
  }

  componentDidMount = () => {
    
    this.beerService
      .getRandomBeer()
      .then((response) => this.setState({ ...response.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return !this.state.name ? (
      <h3>CARGANDO</h3>
    ) : (
      <Container as="main">
        <h1>{this.state.name}</h1>

        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <Image src={this.state.image_url} />
            <h2>{this.state.name}</h2>
            <h3>{this.state.tagline}</h3>
            <p>{this.state.description}</p>
            <h5>{this.state.contributed_by}</h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BeerRandom;
