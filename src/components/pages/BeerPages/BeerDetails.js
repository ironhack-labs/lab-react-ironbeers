import axios from 'axios';
import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

class BeerDetails extends Component {
  constructor() {
    super();

    this.state = {
      beer: undefined,
    };
  }

  componentDidMount = () => this.loadBeer();

  loadBeer = () =>
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => this.setState({ beer: response.data }))
      .catch((err) =>
        console.error('Error trying to get the beer data from the API', err)
      );

  render = () => (
    <>
      {this.state.beer ? (
        <Container style={{ marginTop: 50 }}>
          <Row style={{ height: '100%' }}>
            <Col sm={4} style={{ height: '100%' }}>
              <Image
                src={this.state.beer.image_url}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Col>

            <Col sm={8}>
              <h2 style={{ textAlign: 'left' }}>{this.state.beer.name}</h2>
              <p
                style={{
                  fontSize: '1.5em',
                  fontWeight: 500,
                  color: 'darkgray',
                }}
              >
                {this.state.beer.tagline}
              </p>
              <p>First brewed: {this.state.beer.first_brewed}</p>
              <p>Attenuation level: {this.state.beer.attenuation_level}</p>
              <p>Description: {this.state.beer.description}</p>
              <p
                style={{
                  fontStyle: 'italic',
                  color: 'darkgray',
                  textAlign: 'right',
                }}
              >
                {this.state.beer.contributed_by}
              </p>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default BeerDetails;
