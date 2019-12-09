import React, { Component } from "react";
import Navbar from "./Navbar";
import { beers } from "./../Services/ListBeers";

export class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: []
    };
  }

  componentDidMount() {
    const beerId = this.props.match.params.id;
    beers()
      .then(beers => {
        var randomBeer = beers.data[Math.floor(Math.random()*beers.data.length)];
        this.setState({ randomBeer });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let beer = this.state.randomBeer;
    return (
      <div>
        <Navbar />
        {beer && <div className='card-group text-center'>
        <img src={beer.image_url} alt={beer.name} className='card-img-top' style={{maxWidth: '25%'}}/>
        <div className='d-flex justify-content-between'> <h2 className='card-title'>{beer.name}</h2>  <p className="card-text p-3"> {beer.attenuation_level}</p></div>
        <div className='d-flex justify-content-between'> <p className="card-text">Tagline: {beer.tagline}</p>        <p className="card-text"> {beer.first_brewed}</p></div>
        <p className="card-text">Description: {beer.description}</p>
        <p className="card-text">Created by {beer.contributed_by}</p>
        </div>}
      </div>
    );
  }
}

export default RandomBeer;
