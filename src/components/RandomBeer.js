import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          randomBeer: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Random Beer</h1>
        <div>
          <img
            src={this.state.randomBeer.image_url}
            alt="Beer logo"
            style={{ width: '10%' }}
          />
          <h1>{this.state.randomBeer.name}</h1>
          <h3>{this.state.randomBeer.tagline}</h3>
          <p>{this.state.randomBeer.description}</p>
          <p>First brewed: {this.state.randomBeer.first_brewed}</p>
          <p>Attenuation level: {this.state.randomBeer.attenuation_level}</p>
          <p>Contributed by: {this.state.randomBeer.contributed_by}</p>
        </div>
        <Link to="/beers">All Beers</Link>
      </div>
    );
  }
}
