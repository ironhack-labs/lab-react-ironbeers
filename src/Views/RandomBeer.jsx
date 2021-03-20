import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

class RandomBeer extends Component {
  state = {
    beer: ""
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(response => {
      this.setState({beer: response.data});
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.beer && <SingleBeer beerID={this.state.beer._id} />}
      </div>
    )
  }
}

export default RandomBeer
