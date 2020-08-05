import React, { Component } from 'react';
import { Header } from './Header';
import axios from 'axios';

export class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: {},
      //beerId: props.match.params.id,
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ beer: response.data });
      });
  }
  render() {
    const cerveza = this.state.beer;
    return (
      <div>
        <Header />
        <h1>RANDOM BEER</h1>
        <div>
          <img className="beerImg" src={cerveza.image_url} alt={cerveza.name} />
          <h3>{cerveza.name}</h3>
          <h5>
            {cerveza.first_brewed} {cerveza.attenuation_level}
          </h5>
          <p>{cerveza.description}</p>
          <h5>{cerveza.contributed_by}</h5>
        </div>

        {/* <img
          className="beerImg"
          src={this.state.beer.image_url}
          alt="Beer img"
        />
        <h3>{this.state.beer.name}</h3>
        <h4>{this.state.beer.tagline}</h4>
        <h5>
          {this.state.beer.first_brewed} {this.state.beer.attenuation_level}
        </h5>
        <p>{this.state.beer.description}</p>
        <h5>{this.state.beer.contributed_by}</h5> */}
      </div>
    );
  }
}

export default Random;
