import React, { Component } from 'react'
import axios from 'axios'

import NavBar from './../../components/NavBar/NavBar'
import BeerDetail from './../../components/BeerDetail/BeerDetail'

export default class SingleBeer extends Component {
  state = {
    beer: {}
  }

  getSingleBeer = () => {
    const { id } = this.props.match.params
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((apiResponse) => {
        this.setState( { beer: apiResponse.data } )
      })
  }
  
  componentDidMount() {
    this.getSingleBeer()
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
