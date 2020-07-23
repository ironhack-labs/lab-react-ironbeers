import React, { Component } from 'react';
import ironBeersApi from '../api/apiHandler';
import BeerCard from '../Components/BeerCard';
import '../beers.css';

export default class Beers extends Component {
  state = {
    beers: [],
  };

  fetchAllBeers = () => {
    ironBeersApi.getAllBeers().then((apiRes) => {
      this.setState({
        beers: apiRes.data,
      });
    });
  };

  componentDidMount = () => {
    this.fetchAllBeers();
  };

  render() {
    return (
      <div className="beers-grid">
        <h2 className="page-title">All Beers</h2>
        {this.state.beers.map((beer) => (
          <BeerCard beer={beer} key={beer._id}/>
        ))}
      </div>
    );
  }
}
