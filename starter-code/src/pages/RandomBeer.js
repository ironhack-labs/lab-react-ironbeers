import React, { Component } from 'react'
import BEER_SERVICE from '../services/BeerList'
import NavBar from '../components/NavBar'

export class RandomBeer extends Component {
  state = {
    randomBeer: {},
  }
  async componentDidMount() {
    const { data: randomBeer } = await BEER_SERVICE.randomBeer()
    this.setState({ randomBeer })
  }
  render() {
    const { randomBeer } = this.state
    return (
      <div>
        <div className="home-container">
          <NavBar />
        </div>
        <img src={randomBeer.image_url} alt="" />
        <p>{randomBeer.name}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    )
  }
}

export default RandomBeer
