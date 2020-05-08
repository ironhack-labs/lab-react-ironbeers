import React, { Component } from 'react';
import BEER_SERVICE from '../services/Beerlist';
import Navbar from '../components/Navbar';

export class RandomBeer extends Component {
  state = {
    beers: {},
  };

  async componentDidMount() {
    const { data: beers } = await BEER_SERVICE.randomBeer();
    this.setState({ beers });
  }
  render() {
    const { beers } = this.state;
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={beers.image_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {beers.name}
                {beers.tagline}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{beers.attenuation_level}</li>
              <li className="list-group-item">{beers.description}</li>
              <li className="list-group-item">{beers.contributed_by}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomBeer;
