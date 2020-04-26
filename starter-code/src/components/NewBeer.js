import React, { Component } from 'react';
import API from '../helpers/API';
import ContentLoader from './ContentLoader';
import NewBeerForm from './NewBeerForm';

const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class NewBeer extends Component {
  state = {
    status: STATUS.LOADED,
    error: undefined,
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
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
      .catch((error) => {
        this.setState({
          error: error.message,
          status: STATUS.ERROR,
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
    const { status, error } = this.state;
    return (
      <ContentLoader status={status} error={error}>
        <NewBeerForm
          inputs={this.state}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      </ContentLoader>
    )
  }
}
