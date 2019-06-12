import React from 'react';
import BeersServices from '../services/BeersServices';
import BeerData from '../data/data.json' 
import DetailsCardBeer from './misc/DetailsCardBeer';

class RandomBeer extends React.Component {

  state={
    beer: BeerData[0] // para poder modelas la vista en Movil
  }

  componentWillMount(){
    BeersServices.RandomBeer().then(
      beer=> this.setState({beer: beer.data}),
      error=> console.log(error)
    )
  }

  render(){
    const beer = this.state.beer
    return (
      <DetailsCardBeer beer={beer} /> 
    );
  }
}

export default RandomBeer;
