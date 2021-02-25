import React from 'react';
import { Component } from 'react'
import { Link } from 'react-router-dom'
import BeersService from './../../../service/beers.service'

import BeerStructure from './BeerStructure'

class BeerDetails extends Component {
  constructor() {
    super()
    this.state = {
      beer: undefined
    }
    this.beersService = new BeersService()
  }
  componentDidMount() {
    this.loadBeer()
  }

  loadBeer() {
    const beerID = this.props.match.params.id

    this.beersService
      .getOneBeer(beerID)
      .then(response => this.setState({beer: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <BeerStructure {...this.state.beer} />
        <Link to='/beers'>Volver</Link>
      </>
    )
  }
}




export default BeerDetails
