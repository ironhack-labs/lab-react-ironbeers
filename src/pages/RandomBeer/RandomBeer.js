import React, { Component } from 'react';
import axios from 'axios'
import './RandomBeer.css';

import NavBar from '../../components/NavBar/NavBar';
import BeerDetail from '../../components/BeerDetail/BeerDetail'

class RandomBeer extends Component {
  state = {
    beer: {}
  }

  getRandomBeer = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((apiResponse) => {
        this.setState( { beer: apiResponse.data } )
      })
  }

  componentDidMount() {
    this.getRandomBeer()
  }

  render() {

    const { beer } = this.state

    return (
      <div>
        <NavBar />
        <BeerDetail 
          image={beer.image_url}
          name={beer.name}
          tagline={beer.tagline}
          brewedSince={beer.first_brewed}
          attLevel={beer.attenuation_level}
          description={beer.description}
          author={beer.contributed_by}
        />
      </div>
    )
  }
}

export default RandomBeer;