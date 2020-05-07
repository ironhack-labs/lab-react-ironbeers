import React, { Component } from 'react'
import axios from 'axios'

import './beerDetails.css'

import Navbar from './../../components/navbar/navbar'

class BeerDetails extends Component {
  constructor() {
    super()
    this.state = {
      beer: {},
    }
  }

  getBeer() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ beer: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getBeer()
  }

  render() {
    // return <p>{this.state.beer.name}</p>
    return (
      <main>
        <Navbar />
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <div className="text-container">
          <h1>{this.state.beer.name}</h1>
          <h2>{this.state.beer.tagline}</h2>
          <p>{this.state.beer.description}</p>
          <p className="contributor">{this.state.beer.contributed_by}</p>
        </div>
      </main>
    )
  }
}

export default BeerDetails
