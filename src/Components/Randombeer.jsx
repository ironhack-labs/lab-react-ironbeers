import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Component } from 'react';

class RandomBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        this.setState({ beer: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Random Beer</h1>
        <img style={{ width: '10%' }} src={this.state.beer.image_url} alt="" />
        <h2>{this.state.beer.name} </h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        <h3>first Brewed Date: {this.state.beer.first_brewed}</h3>
      </div>
    );
  }
}

export default RandomBeer;
