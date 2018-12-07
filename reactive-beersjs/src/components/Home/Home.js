import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>

        <Link to='/beers'>All Beers</Link>
        <Link to='/random-beer'>Random Beer</Link>
        <Link to='/new-beer'>New Beer</Link>
      </div>
    )
  }
}
