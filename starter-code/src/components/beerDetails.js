import React, { Component } from "react";
import Service from "../service/beer.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    const beersId = this.props.match.params.id;
    this._service
      .getOneBeer(beersId)
      .then(theBeer => this.setState({ beers: theBeer.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="beer-details">
        <section>
          <Row>
            <Col md={6}>
              <h1>Detalles de {this.state.beers.name}</h1>
              <hr></hr>
                <h3>Tagline:</h3>{this.state.beers.tagline}
                <br></br>
                <h3>First Brewed:</h3>{this.state.beers.first_brewed}
                <br></br>
                <h3>Atteniation Level:</h3>{this.state.beers.attenuation_level}
                <br></br>
                <h3>Description:</h3>{this.state.beers.description}
                <br></br>
                <h3>Contributed by:</h3>{this.state.beers.contributed_by}
                <br></br>
              <hr></hr>
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
