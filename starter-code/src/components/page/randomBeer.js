import React, { Component } from "react";
import BeerServices from "../../services/beer.service.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

class BeerDetails extends Component {
  constructor() {
    super();
    this.state = {};
    this.services = new BeerServices();
  }

  componentDidMount = () => this.getRandom();

  getRandom = () => {

      this.services.getRandom()
      .then(DetailsBeer => this.setState({ beers: DetailsBeer }))
      .catch(err => console.log(err));
  };

    render() {


   if (this.state.beers) return (
      <>
            <h1>{this.state.beers.name}</h1>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <h3>Stats</h3>
            <hr></hr>
                    <p>Etiqueta: {this.state.beers.tagline}</p>
                    <p>Nivel: {this.state.beers.first_brewed}</p>
                    <p>Hecha por: {this.state.beers.contributed_by}</p>
                    <p>A tope: {this.state.beers.attenuation_level}</p>
                    <p>Descripcion: {this.state.beers.description}</p>
  

          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <img
              src={this.state.beers.image_url}
              alt={this.state.beers.name}
            ></img>
          </Col>
        </Row>
        <Button as="div" variant="dark" size="sm">
          <Link to="/beers">Volver</Link>
        </Button>
      </>
    );
else {return (<div><h1>ESPERA PACHORRA</h1></div>)}


  }

  
}

export default BeerDetails;