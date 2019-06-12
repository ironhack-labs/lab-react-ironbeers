import React from 'react';
import BeerData from '../data/data.json'
import BeersServices from '../services/BeersServices';
import DetailsCardBeer from './misc/DetailsCardBeer';

class DetailsBeer extends React.Component {
  
  state={
    beer: BeerData[0] // para poder modelas la vista en Movil
  }

  componentWillMount(){
    BeersServices.singleBeer(this.props.match.params.id).then(
      beer => this.setState({beer: beer.data}),
      error=> console.log(error)
    )
  }


  render() {
    const beer = this.state.beer
    return (
      <DetailsCardBeer beer={beer} />
    );
  }
}

export default DetailsBeer;
