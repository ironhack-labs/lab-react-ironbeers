import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BeersService from '../../../services/beers.service';

export default class BeerDetails extends Component {
  constructor() {
    super();

    this.state = {
      beer: null,
    };

    this.BeersService = new BeersService();
  }

  componentDidMount() {
    const { _id } = this.props.match.params;

    this.BeersService.getOneBeer(_id)
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
      <Container>
        {this.state.beer ? (
          <Container>
            <Row className="d-flex justify-content-center">
              <Col md={6}>
                <h1>{this.state.beer.name}</h1>
                <img
                  src={this.state.beer.image_url}
                  alt="not relevant"
                  className="beer-image"
                />
                <h3>{this.state.beer.tagline}</h3>
                <p>Description: {this.state.beer.description}</p>
              </Col>
            </Row>
          </Container>
        ) : (
          <h3>Loading...</h3>
        )}
      </Container>
    );
  }
}
