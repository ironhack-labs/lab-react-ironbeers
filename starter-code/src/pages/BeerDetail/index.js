import React, { Component } from 'react';
import axios from 'axios'
import BeerDetailComp from './BeerDetail';
const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers'

export default class BeerDetail extends Component {
  state = {}
  
  async componentDidMount() {
    const { data } = await axios.get(`${ENDPOINT}`)
    const beer = data.find( beer => beer._id === this.props.match.params.id );
    
    this.setState({ beer });
    
  }

  render() {
    console.log(this.state.beer)
    const { beer } = this.state;
    
    if (!beer) {
      return(
        <div>
          <h2>Loading</h2>
        </div>
      )
    }
    return (
      <BeerDetailComp 
        image = { beer.image_url }
        name = { beer.name }
        tagline = { beer.tagline }
        firstB = {beer.first_brewed}
        attenuation = {beer.attenuation_level}
        description = {beer.description}
        contributor = {beer.contributed_by}
      />
    )
  }
}