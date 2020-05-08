import React, { Component } from 'react'
import BEER_SERVICE from '../services/beerServices'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

export default class Beer extends Component {
  state = {
    beers: [],
  }

  async componentDidMount() {
    const { data } = await BEER_SERVICE.readAll()
    const beers = data.map((ele) => ({ ...ele, key: ele._id }))
    this.setState({ beers })
  }

  render() {
    return (
      <div>
        <Card style={{ width: 300 }}>
          {this.state.beers.map((beer) => (
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="" />
              </Link>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
            </div>
          ))}
        </Card>
      </div>
    )
  }
}
