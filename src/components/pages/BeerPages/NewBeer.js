import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: '',
        })
      )
      .catch((err) =>
        console.error("Couldn't create a new beer with the retrieved data", err)
      );
  };

  render = () => (
    <Container>
      <h2>New Beer</h2>

      <Row>
        <form onSubmit={this.handleSubmit}>
          <label className="col-12" className="col-12">
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            Tagline:
            <input
              type="text"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            First brewed:
            <input
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            Brewers tips:
            <input
              type="text"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            Attenuation level:
            <input
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleInputChange}
            />
          </label>

          <label className="col-12">
            Contributed by:
            <input
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit" className="btn btn-secondary">
            Create
          </button>
        </form>
      </Row>
    </Container>
  );
}

export default NewBeer;
