import React, { Component } from 'react'
import BEERS_SERVICE from '../services/api'
import DisplayBeers from './DisplayBeers'

class Beers extends Component {
  state = {
    beers: [],
  }

  async componentDidMount() {
    const { data } = await BEERS_SERVICE.readAll()
    const beers = data.map((beer) => ({ ...beer, key: beer._id }))
    this.setState({ beers })
  }

  render() {
    return (
      <>
        {this.state.beers.map((beer) => (
          <DisplayBeers key={beer._id} {...beer} />
        ))}
      </>
    )
  }
}

export default Beers
