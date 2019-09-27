import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mb-5 mt-5">Welcome to IronBeers, React Edition</h1>
        <div className="card text-center">
          <div className="card-header">Show our variety of beers</div>
          <div className="card-body">
            <h5 className="card-title">Our Beers</h5>
            <Link to="/beers">
              <img src="../images/beers.png" alt="Beers" />
            </Link>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-header">Let the app pick a random beer for you</div>
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <Link to="/random-beer">
              <img src="../images/random-beer.png" alt="Random Beer" />
            </Link>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-header">Add your own creation of beer</div>
          <div className="card-body">
            <h5 className="card-title">Create New Beer</h5>
            <Link to="/new-beer">
              <img src="../images/new-beer.png" alt="New Beer" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
