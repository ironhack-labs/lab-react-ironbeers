import axios from 'axios';
import React, { Component } from 'react';
import NavBar from './NavBar';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerRandom: [],
      status: 'loading',
    };
  }

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('response', response.data);

        this.setState({
          beerRandom: response.data,
          status: 'loaded',
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>

        <img
          className="h-44 my-4"
          src={this.state.beerRandom.image_url}
          alt="beer_img"
        />

        <h1 className="text-2xl font-black py-4">
          {this.state.beerRandom.name}
        </h1>

        <p className="py-4">{this.state.beerRandom.tagline}</p>

        <p className="py-3">
          <strong>First brewed:</strong>
          {this.state.beerRandom.first_brewed}
        </p>

        <p className="py-3">
          <strong>Attenuation level:</strong>
          {this.state.beerRandom.attenuation_level}
        </p>

        <p className="py-3 text-justify">
          <strong> Description:</strong>
          {this.state.beerRandom.description}
        </p>

        <p className="py-3">
          <strong>Contributed by:</strong>
          {this.state.beerRandom.contributed_by}
        </p>
      </div>
    );
  }
}

export default RandomBeer;
