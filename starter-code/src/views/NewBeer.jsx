import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addNewBeer } from "../services/beers-api";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
      image_url: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    addNewBeer(this.state)
      .then(beers => {
        console.log(beers);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleFormChange}
            />

            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="text"
              name="tagline"
              placeholder="Tagline"
              onChange={this.handleFormChange}
            />

            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              name="description"
              placeholder="Descrpition"
              onChange={this.handleFormChange}
            />

            <Form.Label>First Brewed</Form.Label>
            <Form.Control
              type="text"
              name="first_brewed"
              placeholder="First Brewed"
              onChange={this.handleFormChange}
            />

            <Form.Label>Brewers Tip</Form.Label>
            <Form.Control
              type="text"
              name="brewers_tips"
              placeholder="Brewers Tip"
              onChange={this.handleFormChange}
            />

            <Form.Label>Attenuation Level</Form.Label>
            <Form.Control
              type="text"
              name="attenuation_level"
              placeholder="Attenuation Level"
              onChange={this.handleFormChange}
            />

            <Form.Label>Contributed By </Form.Label>
            <Form.Control
              type="text"
              name="contributed_by"
              placeholder="Contributed by"
              onChange={this.handleFormChange}
            />

            <Form.Label>Image Url </Form.Label>
            <Form.Control
              type="text"
              name="image_url"
              placeholder="URl!"
              onChange={this.handleFormChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
