import React from 'react';
import BeersService from './../../../service/beers.service'
import { Component } from 'react'
import BeerCard from './BeerCard.js'

class AllBeers extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
    this.beersService = new BeersService()
  }
  
  componentDidMount() {
    this.loadBeers()
  }

  loadBeers() {
    this.beersService
      .getAllBeers()
      .then(response => this.setState({beers: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <>
        {this.state.beers.map((elm) => {
          return(
            <BeerCard key={elm._id} {...elm} />
            
          )
        })}
      </>
    )
  }

}

export default AllBeers;