import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <header className="App-header">
      <h1 className="App-title">React IronBeers</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/all-beers">All Beers</Link>
        <Link to="/random-beer">Random Beers</Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>

      </header>
    )
  }
}
