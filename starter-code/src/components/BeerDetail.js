import React, { Component } from 'react'
import { Card, Avatar } from 'antd'
import BEER_SERVICE from '../services/beerServices'

export default class BeerDetail extends Component {
  state = {
    beer: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const { data: beer } = await BEER_SERVICE.readOne(id)
    console.log(beer)
    this.setState({ beer })
  }

  render() {
    const { Meta } = Card
    const { beer } = this.state
    return (
      <div>
        <Card style={{ width: 300 }}>
          <Meta
            avatar={<Avatar src={beer.image_url} />}
            title={beer.name}
            description={beer.tagline}
          />
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed By: {beer.contributed_by}</p>
        </Card>
      </div>
    )
  }
}
