import React, { Component } from 'react'
import axios from 'axios'
import Beer from './../../components/Beer/Beer'

export default class RandomBeer extends Component {
  constructor(props) {
    super()
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
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
        <h1>Hello, I am the Random site</h1>
        <Beer beer={this.state.beer}/>
      </div>
    )
  }
}
