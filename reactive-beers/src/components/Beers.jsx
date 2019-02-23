import React, { Component } from 'react'
import Header from './header';
import beerService from '../beersService/beerService'

export default class Beers extends Component {
  
  constructor(props){
    super(props)
    this.state={
      beer:[],
      image:"",
      name:'',
      tagline:'',
      contributed:""
    }
    this.beerService = new beerService();
    this.getBeers();
  }

  getBeers = () =>{
    this.beerService.getBeers()
    .then(beer=>{
      this.setState({...this.state,beer:beer})
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beer.map((beer, index) => {
          console.log(beer)
          return (
            <div key={index} className="Beers">
              <div>
              <img className="imgBeer" src={beer.image_url} />
              </div>
              <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
