import React from 'react';
import axios from 'axios';

import NewBeerForm from './NewBeerForm';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    descripition: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new/',
        this.state
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <NewBeerForm
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NewBeer;
