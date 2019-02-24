import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

export default class AllBeers extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(response => this.setState({ beers: response.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.beers)
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>All Beers</h2>
        {this.state.beers.map((beer, idx) => {
          return <div key={idx}>
            <img src={beer.image_url} alt='' />
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/allBeers/${beer._id}`}>Details</Link>
          </div>
        })}
      </div>
    )
  }
}
