import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class RandomBeer extends Component {
  constructor(props) {
    super();
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        this.setState({
          beer: res.data,
        });
      });
    this.randomBeer();
  }

  randomBeer() {
    const numRandom = Math.floor(Math.random() * this.props.beers.length);
    const chosenBeer = this.props.beers[numRandom];
    this.setState({
      beer: chosenBeer,
    });
  }

  render() {
    return (
      <>
        <Header />
        <article className="beer-card-single">
          <img
            className="imageCardBeer"
            src={this.state.beer && this.state.beer.image_url}
            alt="beer img"
          ></img>
          <div className="card-description">
            <div className="first-section">
              {' '}
              <h3>{this.state.beer && this.state.beer.name}</h3>
              <div className="attenuation_level">
                {this.state.beer && this.state.beer.attenuation_level}
              </div>
            </div>
            <div className="second-section">
              <div className="tagline">
                {this.state.beer && this.state.beer.tagline}
              </div>
              <div className="first-brewed">
                {this.state.beer && this.state.beer.first_brewed}
              </div>
            </div>
            <p className="tagline">
              {this.state.beer && this.state.beer.description}
            </p>
            <p className="subtext">
              <strong>Created by:</strong>{' '}
              {this.state.beer && this.state.beer.contributed_by}
            </p>
          </div>
        </article>
      </>
    );
  }
}

export default RandomBeer;
