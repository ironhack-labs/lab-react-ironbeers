import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NewBeer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/new-beer" style={{ textDecoration: 'none' }}>New Beer</Link></li>
        </ul>
      </div>
    )
  }
}

