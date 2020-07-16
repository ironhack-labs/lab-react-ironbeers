import React, { Component } from 'react'

import BeerService from './../Service/Service';

class BeerDetail extends Component {
  constructor() {
    super();
    this.state = {
      beerDetails: {},
    };

    this.beerService = new BeerService();
  }

    componentDidMount =()=> {

      
        const id = this.props.match.params.id

        this.beerService
        .getOneBeer(id)
        .then((response) => this.setState({ beerDetails: response.data }))
        .catch((err) => console.log(err));
    }
    
    render() {
        return (
          <>
            <h1>{this.state.beerDetails.name}</h1>
            <h2>{this.state.beerDetails.tagline}</h2>
            <h3>{this.state.beerDetails.description}</h3>
            <h4>{this.state.beerDetails.contributed_by}</h4>
          </>
        );
    }
}

export default BeerDetail