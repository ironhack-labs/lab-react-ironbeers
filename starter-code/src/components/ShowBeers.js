import React, { Component } from 'react'
import Home from './home/Home'

class ShowBeers extends Component {
  render() {
    const { params } = this.props.match
    if (params.beerId && params.beerId !== 'random' && params.beerId !== 'new' && params.beerId !== 'search') {
      return (
        < div >
          Showing an specific beer...
      </div >
      )
    } else if (params.beerId === 'random') {
      return (
        < div >
          Showing a random beer...
      </div >

      )
    } else if (params.beerId === 'search') {
      return (
        < div >
          Showing a beer searched...
      </div >
      )
    } else {
      return (
        <Home />
      )
    }
  }
}

export default ShowBeers