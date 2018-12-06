import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import BeerCard from './../BeerCard/BeerCard';

import axios from 'axios'

export default class AllBeers extends Component {
  constructor() {
    super();

    this.state = {
      beers: null
    }

  }

  componentDidMount() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(beers => {
        this.setState({...this.state, beers})
      })
  }

  render() {
    //console.log('the state is', this.state);
    return (
      <div>
        <h1>All Beers</h1>

        {(this.state.beers) ? this.state.beers.data.map(beer => <BeerCard beer={beer} />) : <p>Loading...</p>}

      </div>
    )
  }
}
