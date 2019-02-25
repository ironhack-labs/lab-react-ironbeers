import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar'

export default class RandomBeer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null
    }
  }
  componentDidMount() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/random/')
      .then(beer => this.setState({...this.state, beer: beer.data[0]}))
  }

  render() {
    return(
      <div>
        <Navbar />
          {
            (this.state.beer) ?
            <div className="container-beers">
              <li><img className="img-width" src={this.state.beer.image_url} /></li>
              <h1 className="beer-name">{this.state.beer.name}</h1>
              <p className="beer-creater">{this.state.beer.tagline}</p>
              <p className="beer-creater">{this.state.beer.first_brewed}</p>
              <h3 className="beer-description">{this.state.beer.attenuation_level}</h3>
              <p className="beer-description">{this.state.beer.description}</p>
              <p className="beer-creater">Created by: {this.state.beer.contributed_by}</p>
            </div> 
           :
          <p>Load</p>
        }           
      </div>
    )
  }
}