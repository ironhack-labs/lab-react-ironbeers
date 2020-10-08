import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import beerApi from '../api/beerApi';

class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beerApi
      .getRandom()
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beer && (
          <div>
            <img src={this.state.beer.image_url} alt="" />
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RandomBeer;
