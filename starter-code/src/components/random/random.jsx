import React, { Component } from 'react'
import axios from "axios" 

export default class Random extends Component {

  state = {
    randomBeer: {}
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((randomBeer) => {
      this.setState({
        randomBeer: randomBeer.data,
      })
    })
  }

  render() {
    return (
      <div>
        Random
        {this.state.randomBeer.name}
        {this.props.match.params.beerId}
        <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name} />
        {this.state.randomBeer.name}
      </div>
    )
  }
}
