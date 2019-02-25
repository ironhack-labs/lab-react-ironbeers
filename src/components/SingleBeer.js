import React from 'react'
import BeerService from '../BeerService'
import HomeLink from './HomeLink';

export default class SingleBeer extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      beer: [],

    }
    this.beerService = new BeerService();
    console.log(props)
    
   this.getSingleBeer(props.match.params.id)
    

  }
  
  getSingleBeer = (id) => {
    this.beerService.getSingleBeer({id})
      .then(beer => {

        this.setState({ ...this.state, beer: beer })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log("hey")
    
    return (
      <div>
        <HomeLink />
        <h1>Single Beers</h1>
        <div>
                <img alt={this.state.beer.name} width="50px" src={this.state.beer.image_url} />
                <div>{this.state.beer.name}</div>
                <div>{this.state.beer.tagline}</div>
                <div>Created by: {this.state.beer.contributed_by}</div>
              
        </div>
      </div>
    )
  }
}


