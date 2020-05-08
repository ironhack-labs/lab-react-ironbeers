import React, { Component } from 'react'
import Form from '../components/Form'

import BEER_SERVICE from '../services/beerServices'

export default class NewBeer extends Component {
  state = {
    beer: [],
  }

  handleSubmit(e) {
    e.preventDefault()

    const [
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    ] = e.target

    const newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
      image_url: 'https://images.punkapi.com/v2/keg.png',
    }

    BEER_SERVICE.create(newBeer)
  }

  render() {
    return (
      <div>
        <div>
          <h2>Add new beer</h2>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
