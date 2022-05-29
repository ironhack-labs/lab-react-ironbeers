import React from 'react'
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <section>
        <Link to="/beers">
            <img src={allBeers} /> 
            </Link>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure dolor error atque placeat minima laboriosam deleniti quos laudantium veritatis aperiam modi labore excepturi incidunt consequatur non minus vitae quam!</p>
           
        </section>
        <section> 
        <Link to="/beers/random">
            <img src={randomBeer} />
            </Link>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure dolor error atque placeat minima laboriosam deleniti quos laudantium veritatis aperiam modi labore excepturi incidunt consequatur non minus vitae quam!</p>
        </section>
        <section> 
        <Link to="/new-beer">
            <img src={newBeer} /> 
            </Link>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure dolor error atque placeat minima laboriosam deleniti quos laudantium veritatis aperiam modi labore excepturi incidunt consequatur non minus vitae quam!</p>
        </section>
    </div>
  )
}

export default HomePage