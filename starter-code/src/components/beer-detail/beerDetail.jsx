import React, { Component } from 'react'
import axios from "axios"

export default class BeerDetail extends Component {

  state = {
    specificBeer: {}
  }

  componentDidMount() {
    // https://ih-beers-api2.herokuapp.com/beers/
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
    .then(specificBeer => {
      this.setState({
        specificBeer: specificBeer.data
      })
    })
  }

  render() {
    console.log(this.props)
    console.log(this.props.match.params.beerId)
    return (
      <div>
        Details
        {this.props.match.params.beerId}
        <img src={this.state.specificBeer.image_url} alt={this.state.specificBeer.name} />
        {this.state.specificBeer.name}
      </div>
    )
  }
}
