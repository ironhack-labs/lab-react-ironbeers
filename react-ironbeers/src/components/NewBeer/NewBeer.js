import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class NewBeer extends Component {
  render() {
    return (
    <div>
      <header><Link to="/">HOME</Link></header>
      <h1>New Beer</h1>
    </div>
    )
  }
}
