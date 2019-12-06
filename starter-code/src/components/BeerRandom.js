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
      .then(theBeer => this.setState({ beer: theBeer.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="coaster-details">
        <section>
          <Row>
            <Col md={6}>
              <h1>Detalles de {this.state.beer.name}</h1>
              <p>
                <strong>Tagline:</strong> {this.state.beer.tagline}
              </p>
              <p>
                <strong>Descripción:</strong> {this.state.beer.description}
              </p>
              <hr></hr>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.contributed_by}</p>

              <Link to="/beer" className="btn btn-dark">
                Volver
              </Link>
            </Col>
            <Col className="beer-detail" md={{ span: 4, offset: 2 }}>
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
