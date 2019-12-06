import React, { Component } from "react";
import Service from '../service/Beer.service'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.id;
    this._service
      .getOneBeer(beerId)
      .then(theBeer => this.setState({ beers: theBeer.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container >
        <section>
          <Row>
            <Col md={6}>
              <h1>Detalles de {this.state.beers.name}</h1>
              <p>{this.state.beers.tagline}</p>
              <p>{this.state.beers.first_brewed}</p>
              <p>{this.state.beers.attenuation_level}</p>
              <p>{this.state.beers.description}</p>
              <p>{this.state.beers.contributed_by}</p>
              <Link to="/" className="btn btn-dark">
                Volver
              </Link>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <img
                src={this.state.beers.image_url}
                alt={this.state.beers.name}
              ></img>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default BeerDetail;
