import React, { Component } from 'react';
import Axios from 'axios';
import Header from './Header';

class RandomBeer extends Component {
  state = {
    beer: {},
  };
  componentDidMount() {
   
    Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(
      (response) => {
        this.setState({ beer: response.data });
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <h3>{this.state.beer.name}</h3>
      </div>
    );
  }
}

export default RandomBeer;
