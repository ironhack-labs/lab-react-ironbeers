import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer:null
    }
  }
  getSingleBeer = () => {
    
    
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(beerData => {
        this.setState({...this.state,beer:beerData.data})
      })
      .catch(e => console.log(e));
  };
  componentDidMount() {
    this.getSingleBeer();
  }
  render() {
    return (this.state.beer) ? (
      <div>
      <div><Link to={`/`}>Home</Link></div>
        
      
        <img style={{ maxWidth: 50 }} src={this.state.beer[0].image_url}></img>
        <div>{this.state.beer[0].name}</div>
        <div>{this.state.beer[0].tagline}</div>
        <div>{this.state.beer[0].first_brewed}</div>
        <div>{this.state.beer[0].attenuation_level}</div>
        <div>{this.state.beer[0].description}</div>
        <div>{this.state.beer[0].contributed_by}</div>
      </div>
    ):<div>Loading ...</div>;
  }
}
