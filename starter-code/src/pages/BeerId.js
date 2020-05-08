import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import BEER_SERVICE from '../services/BeerList'

export class BeerId extends Component {
  state = {
    beer: {},
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    const { data: beer } = await BEER_SERVICE.beerDetail(id)
    this.setState({ beer })
    console.log(beer)
  }

  render() {
    const { beer } = this.state
    return (
      <div>
        <div className="home-container">
          <NavBar />
        </div>
        <h1>Beer Info</h1>
        <img src={beer.image_url} alt="" />
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    )
  }
}

export default BeerId
