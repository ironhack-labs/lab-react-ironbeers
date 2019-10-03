import React, { Component } from 'react'
import axios from 'axios'

export default class Beers extends Component {
  constructor(props) {
    super()
    this.state = {
      allBeers: []
    }
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeers => {
      this.setState({
        ...this.state,
        allBeers: allBeers.data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, I am the beers site</h1>
        <ul>
          {this.state.allBeers.map((beer, idx) => {
            return <li key={idx}>{beer.name}</li>
          })}
        </ul>
      </div>
    )
  }
}
