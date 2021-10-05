import React, { Component } from 'react';
import axios from 'axios';

export default class SingleBeer extends Component {
  state = {
    beer: {},
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({
          beer: response.data,
          loading: false,
        });
      });
  }

  render() {
    return <div>{this.state.beer.name}</div>;
  }
}
