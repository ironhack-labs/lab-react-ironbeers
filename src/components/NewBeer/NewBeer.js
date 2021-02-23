import React from 'react';
import axios from 'axios';
import './NewBeer.css';
import { render } from '@testing-library/react';
//import { Route } from 'react-router-dom';

class NewBeer extends React.Component {
  state = {
    beers: [],
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const beer = {
      name: this.state.name,
      target: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers`, { beer })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={this.handleChange} />
        <label>Tagline:</label>
        <input type="text" name="tagline" onChange={this.handleChange} />
        <label>Description:</label>
        <input type="text" name="description" onChange={this.handleChange} />
        <label>First Brewed:</label>
        <input type="text" name="first_brewed" onChange={this.handleChange} />
        <label>Brewers Tips:</label>
        <input type="text" name="brewers_tips" onChange={this.handleChange} />
        <label>Attenuation Level:</label>
        <input type="number" name="name" onChange={this.handleChange} />
        <label>Contributed by:</label>
        <input type="text" name="contributed_by" onChange={this.handleChange} />
        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewBeer;
