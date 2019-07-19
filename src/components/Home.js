import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="link"   to={'/'}>Home</Link>

        <Link className="link"   to={'/beers'}>Beers</Link>
        <Link className="link" to={'/random-beers'}>Random-beers</Link>
        <Link className="link" to={'/new-beer'}>New-Beers</Link>
        
      </div>
    )
  }
}
