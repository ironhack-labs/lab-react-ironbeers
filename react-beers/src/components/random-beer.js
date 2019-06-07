import React, { Component } from 'react'
import BeersServices from '../service/beers-services'
import Header from '../components/header'
import CardDetails from '../components/card-detail'


class RandomBeer extends Component {

  constructor() {
    super()
    this.state = { beer: {} }
    this.services = new BeersServices()

  }

  componentDidMount() {
    this.services.getRandomBeers()
      .then(randomBeer => {
        this.setState({ beer: randomBeer })
      })
  }


  render() {
    return (

      <div>

        <Header />

        <CardDetails
          image={this.state.beer.image_url}
          name={this.state.beer.name}
          tagline={this.state.beer.tagline}
          first_brewed={this.state.beer.first_brewed}
          attenuation_level={this.state.beer.attenuation_level}
          description={this.state.beer.description}
          contributed_by={this.state.beer.contributed_by} />

      </div>

    )
  }
}

export default RandomBeer