import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../service/beer.service";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      beers: {
        image: "",
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service
      .postBeers(this.state.beers)
      .then(x => {
        this.props.closeModalWindow();
        this.props.updateBeersList();
      })
      .catch(err => console.log(err));
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
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image_url"
            onChange={this.handleInputChange}
            value={this.state.beers.image_url}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.beers.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            type="text"
            name="tagline"
            onChange={this.handleInputChange}
            value={this.state.beers.tagline}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Brewed</Form.Label>
          <Form.Control
            type="text"
            name="first_brewed"
            onChange={this.handleInputChange}
            value={this.state.beers.first_brewed}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Attenuation Level</Form.Label>
          <Form.Control
            type="number"
            name="attenuation_level"
            onChange={this.handleInputChange}
            value={this.state.beers.attenuation_level}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.beers.description}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contributed by</Form.Label>
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
      </Form>
    );
  }
}

export default BeerForm;
