import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    this.getBeer();
  }

  getBeer = async () => {
    const { params } = this.props.match;
    try {
      const getBeer = await axios.get(
        `https://api.punkapi.com/v2/beers/random`
      );
      this.setState({
        beer: getBeer.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const beer = this.state.beer;
    return (
      <div>
        <img src={`${beer.image_url}`} alt="Beer" />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
