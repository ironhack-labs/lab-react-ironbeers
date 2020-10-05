import React, { Component } from 'react';
import Header from '../header/Header';
import { getAllBeer } from '../../services/BeerServices';
import '../single-beer/SingleBeer.css';

export default class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const beers = await getAllBeer();
      const randomBeer = beers[Math.floor(Math.random() * 25)];

      this.setState({ randomBeer }, () =>
        console.log(`All Beers STATE`, this.state.randomBeer)
      );
    } catch (error) {
      console.log(`Error while getting all beers `, error);
    }
  };

  render() {
    console.log(`RANDOM BEER STATE `, this.state.randomBeer);
    const randomBeer = this.state.randomBeer;
    return (
      <div>
        <Header />
        <div key={randomBeer._id} className="single-beer-container">
          <img
            className="single-beer-img"
            src={randomBeer.image_url}
            alt={randomBeer.name}
          />
          <div className="name-rating">
            <h1>{randomBeer.name}</h1>
            <h2>{randomBeer.attenuation_level}</h2>
          </div>
          <div className="tag-brewed">
            <h5>{randomBeer.tagline}</h5>
            <h5>{randomBeer.first_brewed}</h5>
          </div>
          <h4>{randomBeer.description}</h4>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
