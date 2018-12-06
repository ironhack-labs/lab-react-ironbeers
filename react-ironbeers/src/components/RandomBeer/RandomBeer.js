import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class RandomBeer extends Component {
  render() {
    return (
    <div>
      <header><Link to="/">HOME</Link></header>
      <h1>Random Beers</h1>
    </div>
    )
  }
}
