import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      beers: '',
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      )
      .then((beerEl) => {
        this.setState({ beers: beerEl.data });
        console.log(beerEl.data);
      });
  }

  render() {
    return (
      <div className="beerCardDiv">
        <img src={this.state.beers.image_url} />
        <h1>{this.state.beers.name}</h1>
        <h3>{this.state.beers.tagline}</h3>
        <p>{this.state.beers.description}</p>
      </div>
    );
  }
}
