import React, { Component } from 'react'
import BEER_SERVICE from '../services/beerServices'
import { Card } from 'antd'

export default class RandomBeer extends Component {
  state = {
    beer: {},
  }

  async componentDidMount() {
    const { data: beer } = await BEER_SERVICE.oneRandom()
    this.setState({ beer })
  }

  render() {
    const { beer } = this.state
    return (
      <div>
        <Card style={{ width: 300 }}>
          <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed By: {beer.contributed_by}</p>
          </div>
        </Card>
      </div>
    )
  }
}
