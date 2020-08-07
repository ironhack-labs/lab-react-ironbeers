import React, { Component } from 'react';
import Header from './Header';

export class SingleBeer extends Component {
  render() {
    const beer = this.props.location.state;
    console.log(beer);
    return (
      <div>
        <Header />
        <div className="d-flex flex-column">
          <div className="align-self-center py-5">
            <img
              style={{ height: '250px' }}
              src={beer.image_url}
              alt={beer.name}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between px-4">
          <h2>{beer.name}</h2>
          <h3 className="text-secondary">{beer.attenuation_level}</h3>
        </div>
        <div className="d-flex justify-content-between px-4">
          <h5 className="text-secondary">{beer.tagline}</h5>
          <h6>
            <b>{beer.first_brewed}</b>
          </h6>
        </div>
        <p className="px-4 description-beer">
          <b>{beer.description}</b>
        </p>
        <p className="px-4 text-secondary">
          <b>{beer.contributed_by}</b>
        </p>
      </div>
    );
  }
}

export default SingleBeer;
