import React, { Component } from 'react';
import axios from 'axios';

export default class RandomBeer extends Component {
  state = {
    randomBeer: {},
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ randomBeer: response.data, loading: false });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.randomBeer.name}</h1>
      </div>
    );
  }
}
