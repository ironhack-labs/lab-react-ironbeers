import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers" className="home-button home-button-all-beers">All Beers</Link>
        <Link to="/random-beer" className="home-button home-button-random-beer">Random Beer</Link>
        <Link to="/new-beer" className="home-button home-button-new-beer">New Beer</Link>
      </div>
    )
  }
}
