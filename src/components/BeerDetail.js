import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class BeerDetail extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    this.getBeer();
  }

  getBeer = async () => {
    const { params } = this.props.match;
    try {
      const getBeer = (
        await axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
      ).data[0];
      this.setState({
        beer: getBeer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const beer = this.state.beer;
    return (
      <div>
      <Header />
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

export default BeerDetail;
