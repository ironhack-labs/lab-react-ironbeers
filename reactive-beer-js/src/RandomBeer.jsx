import React, { Component } from 'react'
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    axios.get("http://localhost:5000/random").then(beer => {
      this.setState({
        ...this.state,
        beer: beer.data
      });
    });
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        {beer.name}
      </div>
    )
  }
}
