import React, { Component } from 'react'
import BeerService from '../../services/beer.services'
import { Link } from "react-router-dom";


class RandomBeers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
    this.service = new BeerService()
  }

componentDidMount() {
  this.service.getRandom()
    .then(response => {
      const beers = response.data

      this.setState({ beers: beers })
    })
    .catch(err => console.log(err))
}

  render() {

    return (
      <div>
         <h1>Random cervezas</h1>
          <Link to="/"><h1>Home</h1></Link>
         
          <div><img src={this.state.beers.image_url} alt={this.state.beers.name}/> {this.state.beers.name} {this.state.beers.tagline} </div>
          
      </div>
    )
  }
}

export default RandomBeers