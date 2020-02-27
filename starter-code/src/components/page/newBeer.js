import React, { Component } from "react";
import BeerServices from "../../services/beer.service.js";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.services = new BeerServices();
    this.state = {
      beer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        image_url: ""
      }
    };
  }

  postBeer = () => {
    this.services
      .postBeer(this.state.beer)
      .then(() => console.log("Actualizado"))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      beer: { ...this.state.beer, [name]: value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postBeer();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.beer.name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>efción</Form.Label>
          <Form.Control
            type="text"
            name="tagline"
            value={this.state.beer.tagline}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={this.state.beer.description}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comida</Form.Label>
          <Form.Control
            type="text"
            name="first_brewed"
            value={this.state.beer.first_brewed}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sagen</Form.Label>
          <Form.Control
            type="text"
            name="brewers_tips"
            value={this.state.beer.brewers_tips}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Crear nueva Cerveza
        </Button>
      </Form>
    );
  }
}

export default BeerForm;
