import React, { Component } from 'react'
import Header from './Header';
import axios from "axios"

export default class BeerDetail extends Component {
  constructor() {
    super()
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    let APIURL = ""
    if (this.props.match.params.id === "random") {
      APIURL = `https://ironbeer-api.herokuapp.com/beers/random`
      axios.get(APIURL)
        .then(response => {
          this.setState({ beer: response.data[0] })
        })
    } else {
      APIURL = `https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`
      axios.get(APIURL)
        .then(response => {
          this.setState({ beer: response.data })
        })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <img src={this.state.beer.image_url} alt="" />
        <h1>{this.state.beer.name}</h1>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    )
  }
}
