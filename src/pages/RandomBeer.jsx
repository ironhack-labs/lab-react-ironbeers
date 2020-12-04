import React, { Component } from 'react';
import Header from '../components/Header';
import BeerInfo from '../components/BeerInfo';
import axios from 'axios';

export default class RandomBeer extends Component {
  state = {
    beer: {},
    loading: true
  }

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(res => {
        this.setState({
          beer: res.data,
          loading: false
        })
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header />
          <h2>Loading...</h2>
        </div>
      )
    }

    return (
      <div>
        <Header />
        <h1>RANDOM BEER</h1>
        <BeerInfo beer={this.state.beer} />
      </div>
    )
  }
}