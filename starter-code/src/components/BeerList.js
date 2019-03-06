import React, { Component } from 'react'
import BeerCard from './BeerCard'
import { listBeers } from '../services/beersService';

class BeerList extends Component {

  state = {
    beers: [],
    error: false
  }
  
  componentDidMount = () => {
    listBeers()
        .then(response => this.setState({ beers: response.data }))
        .catch(err => this.setState({ error: true }))
  }

  render = () => {
    if (this.state.error) {
      return (<h1>Oops! Error!</h1>)
    } else {
      return (
        <div className="container">
          {this.state.beers.map(beer => <BeerCard fromList="true" key={beer._id} {...beer}/>)}
        </div>
      )
    }
  }

}

export default BeerList