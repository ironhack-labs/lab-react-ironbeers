import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RandomBeer extends Component {
  render() {
    return (
          <li><Link to="/random-beer" style={{ textDecoration: 'none' }}>Random Beer</Link></li>
    )
  }
}