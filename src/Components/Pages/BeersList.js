import React from 'react';
import { Component } from 'react';
import './Beers.css';

import BeersService from './../../Service/beers.service';

import Header from './../Layout/Header';
import BeerCard from './BeerCard';

class BeersList extends Component {
  constructor() {
    super();
    this.state = {
      beers: undefined,
    };
    this.beersService = new BeersService();
  }

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers() {
    this.beersService
      .getAllBeers()
        .then((response) => {
            this.setState({ beers: response.data }
        )})
      .catch((err) => console.log('API GET ERROR:', err));
  }

  render() {
    const beersToShow = this.state.beers;
    return !beersToShow ? (
      <section>
        <Header></Header>
        <h1>LOADING BEERS LIST</h1>
      </section>
    ) : (
      <section>
        <Header></Header>
                {beersToShow.map(elm => <BeerCard key={elm._id} {...elm}/>)}
      </section>
    )
  }
}

export default BeersList;
