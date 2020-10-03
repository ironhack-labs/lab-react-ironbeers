import React from 'react';
import { getBeers } from '../../services/api-client';
import BeerCard from '../beercard/BeerCard';
import './BeerList.css';

class BeerList extends React.Component {
  state = {
    beers: [],
  };

  geetBeers = () => {
    getBeers().then((beers) => {
      this.setState({ beers });
    });
  };
  componentDidMount() {
    this.geetBeers();
  }

  render() {
    return (
      <div className="cards">
        {this.state.beers.map((beer, key) => (
          <BeerCard key={key} beer={beer} />
        ))}
      </div>
    );
  }
}

export default BeerList;
