import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'

export default class BeerRandom extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    this.getRandomBeer()
  }

  getRandomBeer = async () => {
    let response = await axios.get(
      'https://ih-beer-api.herokuapp.com/beers/random'
    )
    this.setState({
      beer: response.data
    })
  }

  render() {
    const { beer } = this.state
    console.log(beer)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100vh'
        }}
      >
        {
          <Card
            title={beer.name}
            style={{ width: '25%' }}
            cover={<img src={beer.image_url} alt={beer.name} height="500px" />}
          ></Card>
        }
      </div>
    )
  }
}
