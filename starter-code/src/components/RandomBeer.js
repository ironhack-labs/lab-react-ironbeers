import React, { Component } from 'react'
import BEERS_SERVICE from '../services/api'

class RandomBeer extends Component {
  state = {
    beer: {},
  }

  async componentDidMount() {
    const beer = await BEERS_SERVICE.random()
    this.setState({ beer: beer.data })
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beer
    return (
      <div className="detailedView">
        <div className="imageDetailed">
          <img src={image_url} alt="" />
        </div>
        <div className="level1">
          <p>{name}</p>
          <p>
            <span>{attenuation_level}</span>
          </p>
        </div>
        <div className="level2">
          <p>
            <span>{tagline}</span>
          </p>
          <p>{first_brewed}</p>
        </div>
        <div className="level3">
          <p>{description}</p>
          <p>
            <span>{contributed_by}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default RandomBeer
