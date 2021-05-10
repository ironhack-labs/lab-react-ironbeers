import React, { Component } from 'react';
import BeersService from '../services/beers.service';
import Header from './Header';
import OneBeer from './OneBeer';
import './AllBeers.css';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      search: '',
    };
  }

  beersService = new BeersService();

  refreshState() {
    this.beersService
      .getBeers()
      .then((beers) => {
        console.log(beers);
        this.setState({ beers: beers.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayBeers() {
    const { beers } = this.state;
    return beers.map((beer) => {
      return (
        <OneBeer
          refreshState={() => this.refreshState()}
          key={beer._id}
          {...beer}
        />
      );
    });
  }

  searchBeers(event) {
    this.setState({ search: event.target.value });
    this.beersService
      .searchBeer(this.state.search)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const search = this.state.search;
    return (
      <div>
        <Header />
        <input
          type="text"
          className="form-control"
          id="search-input"
          name="search"
          placeholder="Find a beer..."
          onChange={(e) => this.searchBeers(e)}
        />
        <div className="beerList">{this.displayBeers()}</div>
      </div>
    );
  }
}

export default Beers;
