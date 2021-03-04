import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from 'axios';

class RandomBeers extends Component {
  state = {
    randomBeer: {},
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          randomBeer: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <HomeButton />
        <div key={this.state.randomBeer._id}>
          <img
            src={this.state.randomBeer.image_url}
            alt={this.state.randomBeer.name}
            width="50vw"
          />
          <h2>{this.state.randomBeer.name}</h2>
          <p>{this.state.randomBeer.tagline}</p>
          <p>{this.state.randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeers;
