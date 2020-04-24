import React, { Component } from 'react';

const API_ROOT = 'https://ih-beers-api2.herokuapp.com/beers';
const STATUS = { LOADING: 'loading', LOADED: 'loaded', ERROR: 'error' };

export default class BeerList extends Component {
  state = {
    beers: [],
    status: STATUS.LOADING,
    error: undefined,
  };

  componentDidMount() {
    fetch(API_ROOT)
      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        else return response.json();
      })
      .then(beers => this.setState({ beers, status: STATUS.LOADED }))
      .catch(error => this.setState({ error: error.message, status: STATUS.ERROR }))
  }

  render() {
    const { beers, status, error } = this.state;
    return (
      <div>
        beers
      </div>
    )
  }
}
