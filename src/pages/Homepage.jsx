import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'


function Homepage() {


  return (
    <div>
        <Link to="/beers"><div>
            <img src={beers} alt="" />
            <h1>All Beers</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae modi sequi commodi cumque ad ipsam itaque, pariatur possimus asperiores vero quibusdam sit ipsum, iure expedita eos, esse obcaecati. Cum, officia!</p>
        </div></Link>
        <Link to="/random"><div>
            <img src={randomBeer}/>
            <h1>Random Beer</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae modi sequi commodi cumque ad ipsam itaque, pariatur possimus asperiores vero quibusdam sit ipsum, iure expedita eos, esse obcaecati. Cum, officia!</p>
        </div></Link>
        <Link to="/new"><div>
            <img src={newBeer}/>
            <h1>New Beer</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae modi sequi commodi cumque ad ipsam itaque, pariatur possimus asperiores vero quibusdam sit ipsum, iure expedita eos, esse obcaecati. Cum, officia!</p>
        </div></Link>
    </div>
  )
}

export default Homepage