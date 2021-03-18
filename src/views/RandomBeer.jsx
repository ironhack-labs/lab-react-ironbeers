import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { randomBeer } from './../api/beersApi';

export class RandomBeer extends Component {
  state = {
    beer: '',
  };

  componentDidMount() {
    this.loadRandomBeer();
  }

  async loadRandomBeer() {
    const beer = await randomBeer();
    console.log('Load random beer successful');
    this.setState({
      beer: beer,
    });
  }

  render() {
    const singleBeer = this.state.beer;
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <div>
          {singleBeer && (
            <div>
              <img src={singleBeer.image_url} alt={singleBeer.name} />
              <h1>{singleBeer.name}</h1>
              <span>{singleBeer.tagline}</span>
              <br />
              <div>{singleBeer.first_brewed}</div>
              <div>{singleBeer.attenuation_level}</div>
              <p>{singleBeer.description}</p>
              <small>{singleBeer.contributed_by}</small>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default RandomBeer;
