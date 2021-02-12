import React, { Component } from 'react';
import axios from 'axios';
import BeerForm from './BeerForm';

class NewBeer extends Component {
  state = {
    name: '',
    image_url: '',
    tagline: '',
    first_brewed: '',
    description: '',
    attenuation_level: 0,
    contributed_by: '',
    brewers_tips: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );

      console.log(response);
      this.props.history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <BeerForm
        title="New Beer"
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NewBeer;