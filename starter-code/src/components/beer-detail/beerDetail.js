import React, { Component } from 'react'
import axios from "axios"

export default class BeerDetail extends Component {

  state = {
    specificBeer: {}
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
    .then(specificBeer => {
      this.setState({
        specificBeer: specificBeer.data
      })
    })
  }

  render() {
    return (
      <div className="detail">

        <img src={this.state.specificBeer.image_url} alt={this.state.specificBeer.name} width="90px"/>
        <p><strong>Nombre:</strong> {this.state.specificBeer.name}</p>
        <p><strong>Descripción:</strong> {this.state.specificBeer.description}</p>
        <p><strong>Nivel de atenuación:</strong> {this.state.specificBeer.attenuation_level}</p>
        <p><strong>PH:</strong> {this.state.specificBeer.ph}</p>
      </div>
    )
  }
} 