import React from 'react'
import randomBeer from "../assets/random-beer.png"
import { Link } from 'react-router-dom';


function RandomBeer() {
  return (
    <div>
<Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="" /> </Link>
<img src={randomBeer} alt="" />
         
HOLA
    </div>
  )
}

export default RandomBeer
