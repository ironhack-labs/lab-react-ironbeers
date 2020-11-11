import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

import axios from 'axios';

class Beers extends Component {
  state = {
    allBeers: [],
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => {
      this.setState({allBeers: res.data});
    })
    .catch(err => console.log(err));
  }

  displayAllBeers = () => {
    const beerDisplay = this.state.allBeers.map((beer) => (
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <h3>Created by: {beer.contributed_by}</h3>
      </div>
    ));
    return beerDisplay;
  }

  render() {
    return(
      <div>
        <NavBar />
        {this.displayAllBeers()}
      </div>
    );
  }
}

export default Beers;

