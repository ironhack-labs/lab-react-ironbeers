import axios from 'axios';
import React, { Component } from 'react';
import SingleBeer from '../SingleBeer/SingleBeer';

class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.beer && <SingleBeer beerId={this.state.beer._id} />}
      </div>
    );
  }
}

export default RandomBeer;
