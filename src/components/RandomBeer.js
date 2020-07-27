import React, { Component } from 'react';
import { api } from '../api-config';

import Header from './Header';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {},
    };
  }

  componentDidMount() {
    api
      .get('beers/random')
      .then((response) => {
        this.setState(() => ({ randomBeer: response.data }));
      })
      .catch((err) => console.log('Error trying to get the random beer', err));
  }

  render() {
    const beer = this.state.randomBeer;
    return (
      <div>
        <Header />
        <div className="singleBeerImg">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className="singleBeerData">
          <div>
            <h4 className="text-spread">
              <span>{beer.name}</span>
              <span className="gray">{beer.attenuation_level}</span>
            </h4>
          </div>
          <div>
            <h5 className="text-spread">
              <span className="gray">{beer.tagline}</span>
              <span className="smaller">{beer.first_brewed}</span>
            </h5>
          </div>
          <div>
            <p>{beer.description}</p>
          </div>
          <div>
            <p className="align gray">{beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
