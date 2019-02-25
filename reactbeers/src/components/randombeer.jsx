import React, { Component } from 'react'
import Header from './header';
import beerService from './beerService';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: []
    }
    this.beerService = new beerService();
    this.getRandomBeers();
  }
  getRandomBeers = () => {
    this.beerService.getRandomBeers()
      .then(beer => {
        this.setState({ ...this.state, beer: beer [0] })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>

        <Header />

        <h1>Random Beer</h1>
        <img src={this.state.image_url} alt="" />
        <h4>{this.state.beer.name}</h4>
        <h4>{this.state.beer.tagline}</h4>
        <h4>{this.state.beer.first_brewed}</h4>
        <h4>{this.state.beer.attenuation_level}</h4>
        <h4>{this.state.beer.description}</h4>
        <h4>{this.state.beer.contributed_by}</h4>
      </div>
    )
  }
}
