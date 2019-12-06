import React, { Component } from "react";
import Service from "../service/beer.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class BeerRandom extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    this._service
      .getRandomBeer()
      .then(thisBeer => this.setState({ beer: thisBeer.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="beer-detail">
        <section>
          <Row>
            <Col md={6}>
              <h1>Detalles de {this.state.beer.name}</h1>
              <p>
                <strong>Descripción:</strong> {this.state.beer.description}
              </p>
              <hr></hr>
              <p>
                <small>Tagline:</small> {this.state.beer.tagline} | First
                Brewed:
                {this.state.beer.first_brewed}
              </p>
              <Link to="/" className="btn btn-dark">
                Volver
              </Link>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <img
                src={this.state.beer.image_url}
                alt={this.state.beer.name}
              ></img>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default BeerRandom;
