import React from 'react'
import {detail} from '../services/BeerService'
import ShowBeer from './ShowBeer'

class BeerDetail extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    detail(this.props.match.params.id)
      .then(beer => this.setState({beer}))
  }

  render() {
    return (
      <ShowBeer beer={this.state.beer}/>
    )
  }
}

export default BeerDetail
