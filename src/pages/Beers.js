import React from 'react'
import Navbar from '../components.js/Navbar'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getBeers } from '../services/base-api'

function Beers() {

  const [beer, setBeer] = useState([])
  useEffect(() => {
    getBeers()
      .then(beers => setBeer(beers))
  })

  return (
    <div>
      <Navbar></Navbar>
      {beer.map((beers) => {
        return (
          <div key={beers._id}>
            <NavLink
              to={`/beers/${beers._id}`} >
              <img src={beers.image_url} alt="beerImg" className="imgBeers" />
              <h3>{beers.name}</h3>
            </NavLink>
            <p>{beers.tagline}</p>
            <span>Created by: {beers.contributed_by}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Beers
