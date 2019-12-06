import React, { Component } from "react";
import Service from "../service/beer.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.id;
    this._service
      .getOneBeer(beerId)
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
              <p>{this.state.beer.food_pairing}</p>

              <Link to="/beer" className="btn btn-dark">
                Volver
              </Link>
            </Col>
            <Col className="beer-detail"  md={{ span: 4, offset: 2 }}>
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

export default BeerDetail;
