import React, { Component } from 'react'
import BeerService from '../../../service/beers-service'

import { Container } from 'react-bootstrap'

import Header from '../../shared/Header'
import BeerCard from './BeerCard'

class BeerList extends Component {
  constructor () {
    super()
    this.state = {
      beers: []
    }
    this.beerService = new BeerService()
  }

  componentDidMount = () => this.refreshBeers()

  refreshBeers = () => {
    this.beerService
      .getAllBeers()
      .then(res => this.setState({ beers: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <ul className="list-unstyled">
            {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} path={`/beers/${elm._id}`} />)} 
          </ul>
        </Container>
      </>
    )
  }
}

export default BeerList