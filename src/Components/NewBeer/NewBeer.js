import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import BeerService from '../../services/beers.service';

export default class NewBeerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: 0,
      contributed_by: '',
      image_url: '',
    };

    this.service = new BeerService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.service
      .createBeer(this.state)
      .then((response) => {
        this.props.refreshBeers();
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.description}
            name="description"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tagline">
          <Form.Label>Tagline</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.tagline}
            name="tagline"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="first_brewed">
          <Form.Label>First Brewed</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.first_brewed}
            name="first_brewed"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contributed_by">
          <Form.Label>Created By</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.contributed_by}
            name="contributed_by"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="attenuation_level">
          <Form.Label>Atenuation Level</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.attenuation_level}
            name="attenuation_level"
            type="number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image_url">
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.image_url}
            name="image_url"
            type="text"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
