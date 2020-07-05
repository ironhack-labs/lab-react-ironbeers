import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(res => {
        this.setState({
          beer: res.data
        })
    })
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <img style={{"width":"100px"}}src={this.state.beer.image_url}></img>
        <br/>
        Name: {this.state.beer.name} <br/>
        {this.state.beer.tagline} <br/>
        First Brewed:{this.state.beer.first_brewed} <br/>
        Attenuation Level: {this.state.beer.attenuation_level} <br/>
        description: {this.state.beer.description} <br/>
        COntributed by: {this.state.beer.contributed_by}
      </div>
    );
  }
}

export default RandomBeer;