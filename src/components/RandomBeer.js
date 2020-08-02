import React, { Component } from 'react';
import axios from 'axios';

export class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) =>
        this.setState({ ...this.state, beer: response.data })
      );
  }

  render() {
    const beer = this.state.beer;
    return (
      <div className="container mt-4">
        <img
          src={beer.image_url}
          alt={beer.name}
          style={{ height: '200px', width: 'auto' }}
        />
        <div></div>
        <div className="row mt-4">
          <div className="col-8">
            <h2>{beer.name}</h2>
          </div>
          <div className="col-4">
            <h2 className="ml-auto text-right text-secondary">
              {beer.attenuation_level}
            </h2>
          </div>
          <div className="col-8 text-secondary">
            <h4>{beer.tagline}</h4>
          </div>
          <div className="col-4">
            <h4 className="ml-auto text-right">{beer.first_brewed}</h4>
          </div>
          <div className="col-12">
            <p>{beer.description}</p>
            <p className="text-secondary font-weight-bold">
              {beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
