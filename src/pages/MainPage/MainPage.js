import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainPage.css'

import allBeersImg from './../../assets/beers.png'
import newBeerImg from './../../assets/new-beer.png'
import randomBeerImg from './../../assets/random-beer.png'

function MainPage() {
  return (
    <div>
      <NavLink className="card-link" to="/all-beers">
        <img src={allBeersImg} alt="allBeers"/>
        <h3>All Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae luctus ligula. Maecenas a non.</p>
      </NavLink>
      <NavLink className="card-link" to="/random-beer">
        <img src={randomBeerImg} alt="randomBeers"/>
        <h3>Random Beer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae luctus ligula. Maecenas a non.</p>
      </NavLink>
      <NavLink className="card-link" to="/new-beer">
        <img src={newBeerImg} alt="newBeers"/>
        <h3>New Beers</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae luctus ligula. Maecenas a non.</p>
      </NavLink>
    </div>
  )
}

export default MainPage;