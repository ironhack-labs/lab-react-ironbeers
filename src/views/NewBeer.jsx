import React, { Component } from 'react';
import HomeButtonHeader from '../components/HomeButtonHeader';
import axios from 'axios';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
      });
  };

  render() {
    return (
      <div>
        <HomeButtonHeader />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            name="name"
            id="name"
            type="text"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleChange}
            name="tagline"
            id="tagline"
            type="text"
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={this.handleChange}
            name="description"
            id="description"
            type="text"
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            onChange={this.handleChange}
            name="first_brewed"
            id="first_brewed"
            type="text"
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            onChange={this.handleChange}
            name="brewers_tips"
            id="brewers_tips"
            type="text"
          />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            onChange={this.handleChange}
            name="attenuation_level"
            id="attenuation_level"
            type="number"
          />
          <label htmlFor="contributed_by">Contributed by</label>
          <input
            onChange={this.handleChange}
            name="contributed_by"
            id="contributed_by"
            type="text"
          />
          <button>Add beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
