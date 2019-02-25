import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';
import axios from "axios"

export default class Beers extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="all-beers">
          {this.state.beers.map(beer =>
            <Link
              to={`/beers/${beer._id}`}
              key={beer._id}>
              <img src={beer.image_url} alt="" />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <hr />
            </Link>

          )}
        </div>
      </div>
    )
  }
}
