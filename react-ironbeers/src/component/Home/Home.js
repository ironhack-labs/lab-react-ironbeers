import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>ESTÁS EN LA HOME!</h1>
         <Link className="App-link" to="/">Home</Link>
         <br/>
         <Link className="App-link" to="/beers">beers</Link>
         <br/>
         <Link className="App-link" to="/randomBeer">randomBeer</Link>
         <br/>
         <Link className="App-link" to="/newBeer">newBeer</Link>

      </div>
    )
  }
}
