import React, { Component } from 'react';
import Header from './misc/Header';
import BeerItem from './misc/BeerItem';
import { listBeers } from '../services/BeersService'

class Beers extends Component {

  state = {
    beers: [],
    error: false
  }

  componentDidMount = () => {

    listBeers()
    .then (response => {
        console.log(response)
        this.setState({beers: [...response.data]})
    },
    err => this.setState ({ error: true}))  
  }

  renderItems = () => {
    const beers = this.state.beers.map((beer, index) => {
      return <BeerItem key={index} {...beer}/>});
      return beers;  
  }
  
  render(){
      if (this.state.error){
        return <h1>Ops, error </h1>
      } else {
        return (      
        <div className="container">
          <Header />
          {this.renderItems()}
        </div>
        );
      }
  }

}

export default Beers;
