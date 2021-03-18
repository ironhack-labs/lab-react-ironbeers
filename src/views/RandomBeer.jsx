import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { randomBeer } from './../api/beersApi';
import BeerView from './../components/BeerView';

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
            <BeerView
              name={singleBeer.name}
              _id={singleBeer._id}
              contributed_by={singleBeer.contributed_by}
              tagline={singleBeer.tagline}
              img={singleBeer.image_url}
              first_brewed={singleBeer.first_brewed}
              attenuation_level={singleBeer.attenuation_level}
              description={singleBeer.description}
            />
          )}
        </div>
      </div>
    );
  }
}

export default RandomBeer;
