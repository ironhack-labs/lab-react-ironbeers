import React from 'react';
import './NewBeer.css';

import HomeLink from '../HomeLink/HomeLink';
import axios from 'axios';

export default class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    });
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    return (
      <div>
        <HomeLink />
        <form className="new-beer" onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={tagline}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleChange}
            value={first_brewed}
          />
          <label>Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleChange}
            value={brewers_tips}
          />
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleChange}
            value={attenuation_level}
          />
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleChange}
            value={contributed_by}
          />
          <button>Add New</button>
        </form>
      </div>
    );
  }
}
