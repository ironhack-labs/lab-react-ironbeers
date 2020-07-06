import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../App.css';

class RandomBeer extends Component {
  state = {
    beer: {},
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random/`
    ); // endpoint

    this.setState({
      beer: res.data,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        <div>        
          <img
            style={{ width: '90px' }}
            src={this.state.beer.image_url}
            alt={this.state.beer.name}
          />
          <div>
            <div>
              <h1>{this.state.beer.name}</h1>
              <h3>{this.state.beer.tagline}</h3>
            </div>
            <div>
              <h6>{this.state.beer.attenuation_level}</h6>
              <h6>{this.state.beer.first_brewed}</h6>
            </div>
            <p>{this.state.beer.description}</p>
            <h6>{this.state.beer.contributed_by}</h6>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
