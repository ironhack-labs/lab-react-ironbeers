import React, { Component } from 'react';
import { newBeer } from './../api/beersApi';

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleFormSubmission = (event) => {
    console.log(event);
    event.preventDefault();
    // this.newBeer(event)
    const body = this.state;
    newBeer(body);
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name of the beer</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Stella Artois"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            placeholder="Leuven's pride"
            value={this.state.tagline}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Some description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label htmlFor="first_brewed">First brewed date</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            placeholder="1974"
            value={this.state.first_brewed}
            onChange={this.handleInputChange}
          />
          <label htmlFor="brewers_tip">Some brewing tips</label>
          <input
            type="text"
            id="brewers_tip"
            name="brewers_tip"
            placeholder="Drink it from the Chalice"
            value={this.state.brewers_tip}
            onChange={this.handleInputChange}
          />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            placeholder="5.5"
            value={this.state.attenuation_level}
            onChange={this.handleInputChange}
          />
          <label htmlFor="contributed_by">Name of contributor </label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            placeholder="Steven Verlinden"
            value={this.state.contributed_by}
            onChange={this.handleInputChange}
          />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
