import React from 'react';
import { Component } from 'react'
import BeersService from './../../../service/beers.service'

import BeerStructure from './BeerStructure'

class RandomBeer extends Component {
  constructor() {
    super()
    this.state = {
      beer: undefined
    }
    this.beersService = new BeersService
  }
  componentDidMount() {
    this.loadBeer()
  }

  loadBeer() {

    this.beersService
      .getRandomBeer()
      .then(response => this.setState({beer: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return(
        <>
            <BeerStructure {...this.state.beer} />
            
        </>
    )
  }
}




export default RandomBeer