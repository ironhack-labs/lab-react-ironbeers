import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import BeersService from './../../../services/beers.service';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  beerService = new BeersService();

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.beerService
      .createBeer(this.state)
      .then(() => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="tagline">
            <Form.Label>Tagline: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="tagline"
              value={this.state.tagline}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="description"
              value={this.state.description}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="first_brewed">
            <Form.Label>First brewed: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="first_brewed"
              value={this.state.first_brewed}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="brewers_tips">
            <Form.Label>Brewers tips: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="brewers_tips"
              value={this.state.brewers_tips}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="attenuation_level">
            <Form.Label>Attenuation level: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="attenuation_level"
              value={this.state.attenuation_level}
              type="number"
              placeholder="Please type here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contributed_by">
            <Form.Label>Contributed by: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="contributed_by"
              value={this.state.contributed_by}
              type="text"
              placeholder="Please type here"
            />
          </Form.Group>

        <Link to="/">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
        </Form>
      </div>
    );
  }
}
