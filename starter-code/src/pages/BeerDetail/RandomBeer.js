import React, { Component } from 'react';
import axios from 'axios';
import { BeerDetail } from '../../styles/components';
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers/random'

export default class BeerRandom extends Component {
  state = {}

  async componentDidMount() {
    const { data } = await axios.get(`${ENDPOINT}`)
    this.setState({ data });
    
  }
  render() {
    const { data } = this.state;

  return (
    <>
   { 
     (data) ?
    <BeerDetail> 
      <img src={data.image_url}/>
        <article>
          <h3>{data.name}</h3>
          <h4>{data.tagline}</h4>
          <h4>{data.attenuation}</h4>
          <small>{data.firstB}</small>
          <p>{data.description}</p>
          <small>{data.contributor}</small>
        </article>
    </BeerDetail> : null
    }
    </>
  )
  }
};

