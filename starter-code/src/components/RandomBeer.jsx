import React, { Component } from 'react'
import axios from "axios"

class RandomBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 beers:{}
                
        }
    }
  componentDidMount() {
      axios.get(`https://ih-beers-api.herokuapp.com/beers/random`)
      .then(response => {
        this.setState({beers: response.data})
    })
  }
  
    render() {
        return (
            <div>
             <img src={this.state.beers.image_url} alt=""/>
             <h1>{this.state.beers.name}</h1>
             <h1>{this.state.beers.tagline}</h1>
             <h1>{this.state.beers.first_brewed}</h1>
             <h1>{this.state.beers.description}</h1>
             <h1>{this.state.beers.attenuation_level}</h1>
            </div>
        )
    }
}

export default RandomBeer
