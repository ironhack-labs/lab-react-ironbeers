import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };
  async componentDidMount() {
    let res = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );

    this.setState({
      randomBeer: res.data,
    });
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <div>
            <img src={this.state.randomBeer.image_url} />
            <h1> {this.state.randomBeer.name}</h1>
            {this.state.randomBeer.tagline}
            <div>{this.state.randomBeer.first_brewed}</div>
            <div>{this.state.randomBeer.description}</div>
            <div>{this.state.randomBeer.contributed_by}</div>
          </div>
        </header>
      </div>
    );
  }
}

export default RandomBeer;
