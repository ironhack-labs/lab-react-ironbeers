import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeersDetail extends Component {
  constructor() {
    super();
    this.state = {
      beer:null
    }
  }
  getSingleBeer = () => {
    
    const params= this.props.match.params.id;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params}`)
      .then(beerData => {
        console.log(beerData)
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
        
      
        <img style={{ maxWidth: 50 }} src={this.state.beer.image_url}></img>
        <div>{this.state.beer.name}</div>
        <div>{this.state.beer.tagline}</div>
        <div>{this.state.beer.first_brewed}</div>
        <div>{this.state.beer.attenuation_level}</div>
        <div>{this.state.beer.description}</div>
        <div>{this.state.beer.contributed_by}</div>
      </div>
    ):<div>Loading ...</div>;
  }
}
