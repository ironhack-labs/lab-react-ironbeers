import React, { Component } from 'react';
import Header from '../components/Header';
import BeersApi from '../API/BeersApi';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    BeersApi.getRandom()
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>random beer</h1>
        {this.state.beer && (
          <>
            <img src={this.state.beer.image_url} alt="image" />
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </>
        )}
      </div>
    );
  }
}
