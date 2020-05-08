import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BEER_SERVICE from '../services/Service';
import BeerCardDetail from '../components/BeerCardDetail';

class RandomBeer extends Component {
  state = {
    beer: [],
  };

  async componentDidMount() {
    const { data } = await BEER_SERVICE.readAll();
    const beers = data.map(beer => ({ ...beer, key: beer._id }));
    this.setState({ beer: beers[Math.floor(Math.random() * beers.length - 1)] });
  }

  render() {
    return (
      <div className="RandomBeer">
        <Navbar />
        <BeerCardDetail
          title={this.state.beer.name}
          text={this.state.beer.tagline}
          description={this.state.beer.description}
          imgSrc={this.state.beer.image_url}
          route="/beers"
        />
      </div>
    );
  }
}

export default RandomBeer;