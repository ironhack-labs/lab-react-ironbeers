import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

import axios from 'axios';

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

  postBeer = (event) => {
    event.preventDefault();
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
      .then((response) => {
        this.setState(() => ({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        }));
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.postBeer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    );
  }
}
