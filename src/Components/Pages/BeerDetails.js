import React from 'react';
import {
  Component
} from 'react';
import './Beers.css';

import beersService from './../../Service/beers.service';

import Header from './../Layout/Header';

class BeerCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: undefined,
      props: this.props,
      beerId: this.props.match.params.beerId
    };
    this.beersService = new beersService();
  }

  componentDidMount() {
    this.loadBeerDetails();
  }

  loadBeerDetails() {
    this.beersService
      .getBeerById(this.state.beerId)
      .then((response) => {
        console.log(response.data)
        this.setState({
          beer: response.data
        });
      })
      .catch((err) => console.log('API GET ERROR:', err));
  }

  render() {
    const beerToShow = this.state.beer;
    return !beerToShow ? (
      <section>
        <Header></Header>
        <h1>LOADING BEER</h1>
      </section>
    ) : (
      <section>
          <Header></Header>
          <img src={beerToShow.image_url} alt={beerToShow.name}></img>
          <h1>{beerToShow.name}   <strong>{beerToShow.attenuation_level}</strong></h1>
          <h2>{beerToShow.tagline}    {beerToShow.first_brewed}</h2>
          <p>{beerToShow.description}</p>
          <h3>Created by: {beerToShow.contributed_by}</h3>
      </section>
    );
  }
}

export default BeerCard;