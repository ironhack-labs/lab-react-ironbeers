import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import Service from "../Service/Beer.service";

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      beer: {
        name: "",
        description: "",
        imageUrl: ""
      }
    };
  }
  updateBeerList = () => {
    this.service
      .getAllBeers()
      .then(allBeersFromDB => this.setState({ beer: allBeersFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.service
      .postBeer(this.state.beer)
      .then(x => {
        this.updateBeersList();
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      beer: { ...this.state.beer, [name]: value }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.beer.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={this.handleInputChange}
            value={this.state.beer.description}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            onChange={this.handleInputChange}
            value={this.state.beer.imageUrl}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Create
        </Button>
      </Form>
    );
  }
}

export default BeerForm;
