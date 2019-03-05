import React, { Component } from 'react';
import { listBeers } from '../services/BeersService';
import BeerItem from './BeerItem';

class Beers extends Component {
  state = {
    beers: []
  }

  componentDidMount = () => {
    listBeers()
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  render = () => {
    if (this.state.error) {
      return (<h1 className="title">Ops, error</h1>);
    } else {
      return (
        <div className="beersList">
          {this.state.beers.map((beer, index) => {
            return <BeerItem {...beer} key={index}/>
          })}
        </div>
      )
    }
  }
}

export default Beers;