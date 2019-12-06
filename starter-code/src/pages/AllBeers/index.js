import React, { Component } from 'react';
import BeerCardComp from './BeersCard';

import axios from 'axios'
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers'


export default class AllBeers extends Component {
  state = {
    beers:[]
  }

  async componentDidMount() {
    const { data } = await axios.get(ENDPOINT)
    this.setState({ beers: [...data] })
  }

  render() {
    const { beers } = this.state;

    return( 
      <>
        { beers.map (beer => (
        <BeerCardComp
          route = {beer._id}
          image = {beer.image_url}
          name = {beer.name}
          tagline = {beer.tagline}
          contributor = {beer.contributed_by}
         />
        ))}
      </>
    );
  }
}