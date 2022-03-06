import React from 'react'
import {Link} from 'react-router-dom';
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

import './Home.css'

function Home() {
  return (
    <div className='container'>
      <div className="box">
        <img src={beers}/>
        <h2>All Beers</h2>
        <p>Check out all the beers that we have</p>
        <Link to={'/all-beer'}><p className="btn">Let's Go</p></Link>
      </div>

      <div className="box">
        <img src={randomBeer}/>
        <h2>Random Beer</h2>
        <p>Need some beer inspiration? Get a random beer recommedation</p>
        <Link to={'/random-beer'}><p className="btn">Let's Go</p></Link>
      </div>

      <div className="box">
        <img src={newBeer}/>
        <h2>New Beer</h2>
        <p>Know a beer that we don't? Add it to our database</p>
        <Link to={'/new-beer'}><p className="btn">Let's Go</p></Link>
      </div>

    </div>
  )
}

export default Home