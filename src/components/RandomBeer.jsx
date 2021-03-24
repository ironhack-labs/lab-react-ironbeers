import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

class RandomBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => this.setState({ beer: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { beer } = this.state;
    if (beer.length === 0) {
      return <div>Currently brewing...</div>;
    }
    return (
      <div>
        <SingleBeer beer={this.state.beer} />
      </div>
    );
  }
}

export default RandomBeer;
