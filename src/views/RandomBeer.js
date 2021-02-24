import React, { Component } from 'react';
import BeerCard from '../components/BeerCard';
import Navbar from '../components/Navbar';
import { getRandomBeer } from './../beer.service';

class RandomBeer extends Component {
  state = {
    randomBeer: {},
  };

  componentDidMount() {
    getRandomBeer()
      .then(({ data }) => this.setState({ randomBeer: data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <BeerCard {...this.state.randomBeer} />
      </div>
    );
  }
}

export default RandomBeer;
