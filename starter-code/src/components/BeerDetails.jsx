import React, { Component } from 'react'
import axios from "axios"

class BeerDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 beers:{}
        }
    }
  componentDidMount() {
      axios.get(`https://ih-beers-api.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({beers: response.data})
    })
  }
  
    render() {
        return (
            <div>
             <h1>{this.state.beers.name}</h1>
             <h1>{this.state.beers.tagline}</h1>
             <h1>{this.state.beers.first_brewed}</h1>
             <h1>{this.state.beers.description}</h1>
             <h1>{this.state.beers.attenuation_level}</h1>
            </div>
        )
    }
}

export default BeerDetails
