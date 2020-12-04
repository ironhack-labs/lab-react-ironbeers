import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';
import Header from './Header';

export default class RandomBeer extends Component {
  state = {
    beer: null,
  };

  getRandomBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        const beer = res.data;
        console.log('beer from axios random beer', beer);
        this.setState({
          beer: beer,
        });
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    const beer = this.state.beer;

    if (!beer)
      return (
        <>
          Fetching beer from the back
        </>
      );
    return (
      <>
        <SingleBeer beer={this.state.beer} />
      </>
    );
  }
}
