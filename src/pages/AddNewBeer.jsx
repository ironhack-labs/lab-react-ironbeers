import React, { Component } from 'react';

export default class AddNewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleInputChange(event) {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <form
          action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="post"
        >
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="name"
            value={this.state.initialValues.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="tagline"
            value={this.state.initialValues.tagline}
            name="tagline"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="description"
            value={this.state.initialValues.description}
            name="description"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="first_brewed"
            value={this.state.initialValues.first_brewed}
            name="first_brewed"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="brewers_tips"
            value={this.state.initialValues.brewers_tips}
            name="brewers_tips"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="attenuation_level"
            value={this.state.initialValues.attenuation_level}
            name="attenution_level"
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="contributed_by"
            value={this.state.initialValues.contributed_by}
            name="contributed_by"
          />
          <button type="submit">Add new beer</button>
        </form>
      </div>
    );
  }
}
