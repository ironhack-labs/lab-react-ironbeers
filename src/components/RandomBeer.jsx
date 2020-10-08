import React, { Component } from 'react';
import beerAPI from '../api/beerAPI';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import BeersMoreDetails from './BeersMoreDetails';

class RandomBeer extends Component {
  state = {
    randomBeer: '',
  };

  componentDidMount() {
    beerAPI
      .getRandomeBeer()
      .then((apiResponse) => {
        this.setState({ randomBeer: apiResponse.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <NavMain />
        {this.state.randomBeer && (
          <BeersMoreDetails key={this.state.randomBeer._id} beer={this.state.randomBeer} />
        )}
      </div>
    );
  }
}

export default RandomBeer;
