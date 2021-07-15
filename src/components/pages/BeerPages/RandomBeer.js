import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

class RandomBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: undefined,
    };
  }

  componentDidMount = () => this.loadBeer();

  loadBeer = () =>
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => this.setState({ beer: response.data }))
      .catch((err) =>
        console.error('Error trying to get the beer data from the API', err)
      );

  render = () => (
    <>
      {this.state.beer ? (
        <Container fluid="true">
          <Row style={{ height: '100%' }}>
            <Col sm={3} style={{ height: '100%' }}>
              <Image
                src={this.state.beer.image_url}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Col>

            <Col sm={9}>
              <h3>{this.state.beer.name}</h3>
              <p>{this.state.beer.tagline}</p>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>{this.state.beer.contributed_by}</p>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default RandomBeer;
