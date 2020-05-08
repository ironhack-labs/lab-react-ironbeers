import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

export default class RandomBeer extends Component {
  state = {
    randomBeer: null,
  };
  getRandomBeerData = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          randomBeer: response.data,
        });
      });
  };

  componentDidMount() {
    this.getRandomBeerData();
  }
  render() {
    const randomBeer = this.state.randomBeer;
    if (!randomBeer) return <div></div>;
    return <SingleBeer id={randomBeer._id} />;
  }
}
