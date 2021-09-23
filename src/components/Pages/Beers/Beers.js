import BeersService from '../../../services/beers.service';
import React, { Component } from 'react';
import { Col, Container, Row, Spinner} from 'react-bootstrap';
import Header from './../../Layout/Header/Header'
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  constructor() {
    super();

    this.state = {
      beers: null,
    };

    this.beerService = new BeersService();
  }

  componentDidMount() {
    this.refreshBeers();
  }

  refreshBeers = () => {
    this.beerService
      .getBeers()
      .then((res) => {
        this.setState({
          ...this.state,
          beers: res.data,
        });
      })
      .catch((err) => console.error(err));
  };

  displayBeers() {
    return this.state.beers ? (
      this.state.beers.map(beer => {
        return (
          <Link
            key={beer._id}
            className="text-dark"
            style={{ textDecoration: 'none' }}
            to={`/beer/${beer._id}`}
          >
            <Row className="justify-content-center">
              <Col className="col-2">
                <img
                  alt={beer.name}
                  src={beer.image_url}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col className="col-10">
                <h3>{beer.name}</h3>
                <p>{beer.description}</p>
                <p>
                  <strong>Created by:</strong> {beer.name}
                </p>
              </Col>
              <hr />
            </Row>
          </Link>
        );
      })
    ) : (
      <Row className="justify-content-center mt-5">
        <Spinner animation="border" />
      </Row>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <Container>{this.displayBeers()}</Container>
      </div>
    );
  }
}
