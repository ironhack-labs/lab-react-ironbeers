import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

import Service from "../service/Beer.service";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      beers: {
        name: "",
        description: "",
        tagline: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service.postBeer(this.state.beers);
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      beers: { ...this.state.beers, [name]: value }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.beers.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.beers.description}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>tagline</Form.Label>
          <Form.Control
            type="text"
            name="tagline"
            onChange={this.handleInputChange}
            value={this.state.beers.tagline}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>brewers_tips</Form.Label>
          <Form.Control
            type="text"
            name="brewers_tips"
            onChange={this.handleInputChange}
            value={this.state.beers.brewers_tips}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>first_brewed</Form.Label>
          <Form.Control
            type="text"
            name="first_brewed"
            onChange={this.handleInputChange}
            value={this.state.beers.first_brewed}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>attenuation_level</Form.Label>
          <Form.Control
            type="number"
            name="attenuation_level"
            onChange={this.handleInputChange}
            value={this.state.beers.attenuation_level}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>contributed_by</Form.Label>
          <Form.Control
            type="text"
            name="contributed_by"
            onChange={this.handleInputChange}
            value={this.state.beers.contributed_by}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Crear
        </Button>
        <Link to="/" className="btn btn-dark">
          Volver
        </Link>
      </Form>
    );
  }
}

export default NewBeer;
