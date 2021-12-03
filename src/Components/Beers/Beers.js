import React, { Component } from 'react';
import NavBar from '../Layout/NavBar';
import BeersService from '../../services/beers.service';
import BeerList from './BeerList';

class Beers extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    };

    this.service = new BeersService();
  }

  componentDidMount() {
    this.refreshBeers();
  }

  refreshBeers = () => {
    this.service
      .getAllBeers()
      .then((response) => {
        const beers = response.data;

        this.setState({ beers: beers });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />
        <BeerList
          refreshCoasters={this.refreshBeers}
          beers={this.state.beers}
        />
      </div>
    );
  }
}

export default Beers;
