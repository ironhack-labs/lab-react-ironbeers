import { Link } from 'react-router-dom'
import React, { Component } from 'react'


export default class Home extends Component {


  render() {
    return (
      <div className="page">
      <h1>Lab IronBeers</h1>
      <p>
        <Link to="/Beers"> All Beers</Link>
      </p>
      <p>
        <Link to="/RandomBeer">Random Beer</Link>
      </p>
      <p>
        <Link to="/NewBeer">New Beer</Link>
      </p>

    </div>
    )
  }
}

