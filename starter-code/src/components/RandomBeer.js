import React, { Component } from 'react';
import Header from './misc/Header';
import { randomBeer } from '../services/BeersService'
import BeerDetailed from './misc/BeerDetailed';


class RandomBeer extends Component{
  state = {
    beer: '',
    error: false
  }

  componentDidMount = () =>  {
    randomBeer()
    .then (response => {
      this.setState({ beer : response.data[0]})
    },
      error => this.setState({ error: true }))
  }

  render(){
    if (this.state.error){
      return <h1>Ops, error </h1>
    } else {
      return (
        <div className="container">
          <Header />
          <BeerDetailed {...this.state.beer}>{this.state.beer.description}</BeerDetailed>
        </div>
      );
    } 
  }
}  

export default RandomBeer;