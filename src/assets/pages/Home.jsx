import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{paddingTop: '20px', maxWidth: '200px'}}>
    <img src={require('../beers.png')} alt="beers" />
    <Link to={'/beers'}>Beers</Link>
    <img src={require('../random-beer.png')} alt="RandomBeer" />
    <Link to={'/random-beer'}>Random Beer</Link>
    <img src={require('../new-beer.png')} alt="NewBeer" />
    <Link to={'/new-beer'}>New Beer</Link>
    </div>
  )
}

export default Home