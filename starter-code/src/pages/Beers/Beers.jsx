import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
            return <li key={idx}><Link to={`/view/${beer._id}`}>{beer.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}
