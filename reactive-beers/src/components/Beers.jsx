import React, { Component } from 'react'
import Header from './header';
import beerService from '../beersService/beerService'
import { Link } from "react-router-dom";

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
      console.log(beer)
    })
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beer.map((beer, index) => {
          return (
            <div key={index} className="Beers">
            <Link to={`/beers/${beer._id}`} key={beer._id}>
              <div>
              <img className="imgBeer" src={beer.image_url} />
              </div>
            </Link>
              <div>
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
