import React, { Component } from 'react';
import axios from 'axios';

export default class SingleBeer extends Component {
  state = {
    beer: {},
  };
  getBeerData = () => {
    const beerId = this.props.id ? this.props.id : this.props.match.params.id;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      });
  };

  componentDidMount() {
    this.getBeerData();
  }
  render() {
    const beerDetail = this.state.beer;
    return (
      <div>
        <img src={beerDetail.image_url} alt="beer" />
        <h2>{beerDetail.name}</h2>
        <h3>{beerDetail.tagline}</h3>
        <p>{beerDetail.attenuation_level}</p>
        <p>{beerDetail.first_brewed}</p>
        <p>{beerDetail.description}</p>
        <p>{beerDetail.contributed_by}</p>
      </div>
    );
  }
}
