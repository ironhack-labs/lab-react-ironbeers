import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  render() {
    return (
      <div id="beers">
      <img src={require('./images/beers.png')} alt=""/>
      <ul>
          <li><Link to="/beers" style={{ textDecoration: 'none' }}>All Beers</Link></li>
        </ul>
    </div>
    )
  }
}


