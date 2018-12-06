import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import BeerDetail from './../BeerDetail/BeerDetail';

import axios from 'axios';

export default class RandomBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null
    }
  }

  componentDidMount() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/random/')
      .then(beer => this.setState({...this.state, beer: beer.data[0]}))
  }

  render() {
    return (
      <div>
        <h1>Random Beer</h1>

        {(this.state.beer) ? <BeerDetail beer={this.state.beer} /> : <p>Loading...</p>}
      </div>
    )
  }
}
