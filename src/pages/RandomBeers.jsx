import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default class RandomBeers extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>random beer</h1>
        <img
          className="photo-beer"
          src={this.state.beer.image_url}
          alt="One beer"
        />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagLine}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}
