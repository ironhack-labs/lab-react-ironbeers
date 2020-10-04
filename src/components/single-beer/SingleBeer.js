import React, { Component } from 'react';
import { getAllBeer } from '../../services/BeerServices';
import './SingleBeer.css';
import Header from '../header/Header';

export default class SingleBeer extends Component {
  state = {
    beers: [],
    beerId: this.props.match.params.singlebeer,
    beer: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  componentDidUpdate(previousProps, previousState) {
    const beerChanged =
      previousProps.match.params.name !== this.props.match.params.name;
    if (beerChanged) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    try {
      const beers = await getAllBeer();

      const beer = beers.find((beer) => beer._id === this.state.beerId);

      this.setState({ beers, beer }, () =>
        console.log(`STATE`, this.state.beers)
      );
    } catch (error) {
      console.log(`Error while getting all beers `, error);
    }
  };

  render() {
    console.log(`BEER STATE `, this.state.beerId);
    console.log(`BEER Match STATE `, this.state.beer);
    const singleBeer = this.state.beer;
    return (
      <div>
        <Header />{' '}
        <div key={singleBeer._id} className="single-beer-container">
          <img
            className="single-beer-img"
            src={singleBeer.image_url}
            alt={singleBeer.name}
          />
          <div className="name-rating">
            <h1>{singleBeer.name}</h1>
            <h2>{singleBeer.attenuation_level}</h2>
          </div>
          <div className="tag-brewed">
            <h5>{singleBeer.tagline}</h5>
            <h5>{singleBeer.first_brewed}</h5>
          </div>
          <h4>{singleBeer.description}</h4>
          <p>{singleBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
