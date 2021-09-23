import React, { Component } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import BeersService from '../../../services/beers.service';
import Header from '../../Layout/Header/Header';

export default class RandomBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null,
    };

    this.beerService = new BeersService();
  }

  componentDidMount() {

    this.beerService
      .getRandomBeer()
      .then((res) => {
        this.setState({
          ...this.state,
          beer: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          {this.state.beer ? (
            <Row>
              <Col className="text-center">
                <h1>{this.state.beer.name}</h1>
                <hr />
                <p>
                  <strong>Description:</strong> <br />
                  <br /> {this.state.beer.description}
                </p>
                <hr />
                <p>
                  <strong>Tagline:</strong> {this.state.beer.tagline}
                </p>
                <p>
                  <strong>First Brewed:</strong> {this.state.beer.first_brewed}
                </p>
                <p>
                  <strong>Attenuation Level:</strong>{' '}
                  {this.state.beer.attenuation_level}
                </p>
                <p>
                  <strong>Contributed by:</strong>{' '}
                  {this.state.beer.contributed_by}
                </p>
                <hr />
                <img
                  src={this.state.beer.image_url}
                  alt={this.state.beer.name}
                  style={{ width: '30%' }}
                />
              </Col>
            </Row>
          ) : (
            <Row className="justify-content-center mt-5">
              <Spinner animation="border" />
            </Row>
          )}
        </Container>
      </div>
    );
  }
}
