import React, { Component } from 'react';

import BeerDetail from './../BeerDetail/BeerDetail'

import axios from 'axios'

export default class Beer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null
    }
  }

  componentDidMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then(beer => this.setState({...this.state, beer: beer.data}))
  }

  render() {
    return (
      <div>
        <h1>Beer</h1>
        
        {(this.state.beer) ? <BeerDetail beer={this.state.beer} /> : <p>Loading...</p>}
      </div>
    )
  }
}