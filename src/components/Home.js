import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="">
          <h1>Holi</h1>
        </header>

        <div className="row">
          <div className="col-12">
            <Link to="/beers">
              <img src={beers} alt="beers"></img>
              <h2>All Beers</h2>
            </Link>


          </div>

          <div className="col-12">
            <Link to="/random-beer">
              <img src={randomBeer} alt="random beer"></img>
              <h2>Random Beers</h2>
            </Link>
          </div>

          <div className="col-12">
            <Link to="/new-beer">
              <img src={newBeer} alt="new-beer"></img>
              <h2>New Beer</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
