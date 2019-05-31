import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerService'
import { Link } from 'react-router-dom'

class SingleBeer extends React.Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    BeerService.getBeer(this.props.match.params.id)
      .then(
        beer => {
          console.log(beer)
          this.setState({beers: beer})},
        error => console.error(error)
      )
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default SingleBeer