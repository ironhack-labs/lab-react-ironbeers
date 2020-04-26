import React, { Component } from 'react';
import API from './API';
import NewBeerForm from './NewBeerForm';
import Error from './Error';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
    error: undefined,
  };

  addBeer() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level: parseInt(attenuation_level),
      contributed_by,
    };
    API('post', '/new', newBeer)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })
  }

  handleInput = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addBeer();
  }

  render() {
    const { error } = this.state;
    if (!error) return <NewBeerForm inputs={this.state} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
    else return <Error error={error} />
  }
}
