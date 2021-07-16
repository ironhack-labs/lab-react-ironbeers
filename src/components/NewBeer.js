import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'reactstrap';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleSubmitForm = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://ih-beers-api2.herokuapp.com/beers`,
      this.state
    );
    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuationLevel: 0,
      contributed_by: '',
    });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
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
      <>
        <Card>
        <form onSubmit={this.handleSubmitForm}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={this.handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={this.handleChange}
          />

          <label>Brewer's Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={this.handleChange}
          />

          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={this.handleChange}
          />

          <label>Created by</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
        </Card>
      </>
    );
  }
}

export default NewBeer;
