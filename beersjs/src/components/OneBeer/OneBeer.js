import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class OneBeer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      beer: null
    }
  }

  getOneBeer = () => {
    
  }
  
  render() {
    

    if(this.state.beers !== null){
      return ( 
        <div>
          <img src={this.state.beer.image_url}></img>
        <div>{this.state.beer.name}</div>
        <div>{this.state.beer.tagline}</div>
        <div>{this.state.beer.first_brewed}</div>
        <div>{this.state.beer.attenuation_level}</div>
        <div>{this.state.beer.description}</div>
        <div>{this.state.beer.contributed_by}</div>
        </div>
        )
      
    }
    else {
      return <h1>Loading...</h1>
    }

  }
}