import React from 'react'
import BeerService from '../BeerService'
import HomeLink from './HomeLink';

export default class RandomBeer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: {},

    }
    this.beerService = new BeerService();
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    this.beerService.getRandomBeer()
      .then(beers => {

        //let stateCopy={...this.state};
        //stateCopy.butterfly=butterflies
        //this.setState(stateCopy)

        this.setState({ ...this.state, beer: beers[0] })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.beer)
    return (
      <div>
        <HomeLink />
        <h1>Random Beers</h1>
        
            <div >
              
                <img alt={this.state.beer.name} width="50px" src={this.state.beer.image_url} />
                <div>{this.state.beer.name}</div>
                <div>{this.state.beer.tagline}</div>
                <div>{this.state.beer.first_brewed}</div>
                <div>{this.state.beer.attenuation_level}</div>
                <div>{this.state.beer.adescription}</div>
                <div>Created by: {this.state.beer.contributed_by}</div>
           
            </div>
          
        
      </div>
    )
  }
}

