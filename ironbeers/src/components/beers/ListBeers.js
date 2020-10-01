import React, { Component } from 'react';

import BeerCardList from './BeerCardList'

import Row from 'react-bootstrap/Row'
import MiNavbar from '../navbar/Navbar'

import beerService from '../../service/beers.service'


class Listbeers extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      showModal: false
    }
    this.beerService = new beerService()
  }

  componentDidMount = () => this.loadBeers()

  loadBeers = () => {
    this.beerService
      .getAllBeers()
      .then(response => this.setState({ beers: response.data }))
      .catch(err => console.log('Error:', err))
  }

  render() {
    return (
      <>
      <MiNavbar/>
      <Row>
        
        <h1>{this.state.beers.map(elm => <BeerCardList key={elm._id} beer={elm}/>)}</h1>

      </Row>
    </>
    )
  }

}

export default Listbeers;