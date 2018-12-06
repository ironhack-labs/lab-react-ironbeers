import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={`/beers`}>BEERS</Link>
        </div>
        <div>
          <Link to={`/randomBeer`}>RANDOM</Link>
        </div>
        <div>
          <Link to={`/newBeer`}>NEW</Link>
        </div>
      </div>
    )
  }
}
