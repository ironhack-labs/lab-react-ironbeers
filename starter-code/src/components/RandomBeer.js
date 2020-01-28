import React from 'react'
import BeerDetail from './BeerDetail'
import {random} from '../services/BeerService'
import ShowBeer from './ShowBeer';

class RandomBeer extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    random()
      .then(beer => this.setState({ beer }))
  }

  render() {
    return (
      <ShowBeer beer={this.state.beer}/>
    )
  }
}

export default RandomBeer
