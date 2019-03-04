import React from 'react';
import {Link} from "react-router-dom"
import axios from "axios"

class RandomBeers extends React.Component{

  state={
    beers : []
  }

  
  getRandomBeer = () => {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random").then(response => {
      this.setState({
        beers: response.data[0]
      })
    })
  }

  componentDidMount() {
   this.getRandomBeer()
  }

  clickHandler = () => {
    this.getRandomBeer()
  }

  render() { 

    return (<div><Link to="/">Home</Link>
     <ul>
      <li>Name: {this.state.beers.name}</li>
      <li>Tagline:{this.state.beers.taglinge}</li>
      <li>Description: {this.state.beers.description}</li>
      <li>First Brewed: {this.state.beers.first_brewed}</li>
      <li>Attenuation Level: {this.state.beers.attenuation_level}</li>
    </ul> 

    <button onClick={() => this.clickHandler()}>new beer</button>
    </div>
    )
  }
}

export default RandomBeers