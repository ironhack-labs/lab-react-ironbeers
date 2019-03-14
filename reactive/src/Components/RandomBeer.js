import React from "react";
import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Axios from "axios";

class RandomBeer extends Component {
  constructor (props) {
    super(props);
    this.state = {beer:{}};
  }
  componentDidMount () {
    this.getRandomBeer();
  }
  getRandomBeer = () => {
    Axios.get("https://ironbeer-api.herokuapp.com/beers/random")
    .then(responseFromAPI => {
      console.log('coucou', responseFromAPI)
      this.setState({
        beer: responseFromAPI.data[0]
      })
    })
  }
  render () {
    return (
      <div>
        <Navbar />
        <div>
        <ul>
          <li><img src={this.state.beer.image_url}></img></li>
          <li>{this.state.beer.name}</li>
          <li>{this.state.beer.tagline}</li>
          <li>{this.state.beer.first_brewed}</li>
          <li>{this.state.beer.attenuation_level}</li>
          <li>{this.state.beer.description}</li>
          <li>{this.state.beer.contributed_by}</li>
        </ul>
        </div>
      </div>
    )
  }
}

export default RandomBeer;