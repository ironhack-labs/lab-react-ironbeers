import React from 'react'
import { Link } from 'react-router-dom'

import beersImg from '../assets/beers.png' 
import randomBeerImg from '../assets/random-beer.png' 
import newBeerImg from '../assets/new-beer.png'

function Home() {
  return (
    <div>
        <section>
            <Link to='/beers'>
                <img src={beersImg} alt="Beers" />
                <h3>All beers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus non, eaque eveniet quos minus aliquid, deserunt officiis harum velit deleniti! Non quas, hic cupiditate harum voluptatum eveniet praesentium eos.</p>
            </Link>
        </section>
        <section>
            <Link to='/random-beer'>
                <img src={randomBeerImg} alt="Random Beer" />
                <h3>Random beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus non, eaque eveniet quos minus aliquid, deserunt officiis harum velit deleniti! Non quas, hic cupiditate harum voluptatum eveniet praesentium eos.</p>
            </Link>
        </section>
        <section>
            <Link to='/new-beer'>
                <img src={newBeerImg} alt="New Beer" />
                <h3>New beer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus non, eaque eveniet quos minus aliquid, deserunt officiis harum velit deleniti! Non quas, hic cupiditate harum voluptatum eveniet praesentium eos.</p>
            </Link>
        </section>
    </div>
  )
}

export default Home

