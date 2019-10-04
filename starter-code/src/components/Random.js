import React, { Component } from 'react'
import axios from "axios";
import Nav from './Nav'

export default class Random extends Component {
  constructor(){
    super();

    this.state ={
      beer: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/random").then(randomBeer => {
      this.setState({
        ...this.state,
        beer: randomBeer.data
      })
    })
  }

  render() {
    return (
      <div>
        <Nav></Nav>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <p>name: {this.state.beer.name}</p>
        <p>Tagline: {this.state.beer.tagline}</p>
        <p>Contributed by: {this.state.beer.contributed_by}</p>
      </div>
    )
  }
}