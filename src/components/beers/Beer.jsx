import React, { Component } from 'react';
import Header from '../header/Header';

export class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: props.beers,
      id: props.match.params.id,
    };
  }
  render() {
    console.log(this.state);
    let beer;
    if (this.state.id) {
      beer = this.state.beers.find((b) => b._id === this.state.id);
    } else {
      const randomIndex = Math.floor(Math.random() * this.state.beers.length);
      beer = this.state.beers[randomIndex];
    }
    console.log(beer);
    if (beer) {
      return (
        <div>
          <Header></Header>
          <div className="card border-0 mt-1">
            <div className="text-center">
              <img
                style={{ height: 300 }}
                className="img-fluid"
                src={beer.image_url}
                alt={beer.name}
              />
            </div>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between m-1">
                <span className="h3">{beer.name}</span>
                <span className="h3 text-secondary">
                  {beer.attenuation_level}
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between m-1">
                <span className="h6 font-weight-bold text-secondary">
                  {beer.tagline}
                </span>
                <span className="h6 font-weight-bold">{beer.first_brewed}</span>
              </div>
              <p className="card-text font-weight-bold">{beer.description}</p>
              <small className="text-secondary font-weight-bold">
                {beer.contributed_by}
              </small>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Beer not found</h1>;
    }
  }
}

export default Beer;
