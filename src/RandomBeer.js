import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'


export default class RandomBeer extends Component {
    
  state = {
    beer:[]
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => {
      console.log(response.data);
      this.setState({
        beer : response.data
      })

    })
  }

    render() {
        return (
            <>
            <Navbar/>
            <div>
            <img src = {this.state.beer.image_url} alt = "image for the beer" style = {{width:40}}/>
            <p>{this.state.beer.name}</p>
            <p>{this.state.beer.tagline}</p>

            {this.state.beer.first_brewed && 
            (<p>First Brewed : {this.state.beer.first_brewed}</p>)}
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
            </div>
            </>
        )
    }
}
