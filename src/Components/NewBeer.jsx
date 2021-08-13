import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 20,
    contributed_by: '',
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
      .then((res) => {
        console.log(res);
        this.props.history.push('/beers');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
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
          <input
            type="textarea"
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

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
