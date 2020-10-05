import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRandomBeer } from '../../services/BeerServices';

export default class RandomBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount = () => {
    getRandomBeer().then((response) => {
      this.setState({
        beer: response.data,
      });
    });
  };

  render() {
    const beer = this.state.beer;

    return (
      <div>
        <div className="header">
          <Link to={'/'}>
            <img src="/images/home.png" alt="home.png" />
          </Link>
        </div>
        <div class="single-beer-card">
          <img src={beer.image_url} alt={beer._id} />
          <div className="head">
            <div className="title-tag">
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
            </div>
            <div className="title-numbers">
              <h2>{beer.attenuation_level}</h2>
              <p className="first-brewed">{beer.first_brewed}</p>
            </div>
          </div>
          <div className="beer-description">
            <p>{beer.description}</p>
            <p className="author">{beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}
