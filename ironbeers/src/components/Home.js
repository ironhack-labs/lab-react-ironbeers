import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import '../App.css'



export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h1>Home</h1>
      <Link to='/beers'>Beers</Link>
      <Link to='/rando  m-beer'>Random Beers</Link>
      <Link to='/new-beer'>New Beers</Link>

 
      </div>
    )
  }
}
