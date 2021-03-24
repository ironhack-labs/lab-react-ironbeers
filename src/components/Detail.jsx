import React, { Component } from 'react';
import axios from 'axios';
import SingleBeer from './SingleBeer';

class BeerDetails extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => this.setState({ beer: response.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { beer } = this.state;

    if (beer.length === 0) {
      return <div>Currently brewing...</div>;
    }
    return <SingleBeer beer={this.state.beer} />;
  }
}

export default BeerDetails;
