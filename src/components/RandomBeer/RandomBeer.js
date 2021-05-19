import React from 'react';
import './RandomBeer.css';
import axios from 'axios';

import Beer from '../Beer/Beer';

export default class RandomBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        this.setState({ beer: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return <Beer beer={this.state.beer} />;
  }
}
