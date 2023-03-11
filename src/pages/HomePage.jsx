import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

function HomePage() {
  return (
    <div className='homepage'>
    <h1>Welcome to Ironbeer</h1>

    

    <div>
    <div className='container'>
    <Link to="/beers" className='hometeaser'>
    <img src="../images/beers.png" alt="Beer"/>
    <h3>All Beers</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </Link>
    </div>
    
    <div className='container'>
    <Link to="/random-beer"  className='hometeaser'>
    <img src="../images/new-beer.png" alt="New Beer"/>
    <h3>Random Beer</h3>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Link>
    </div>

   <div className='container'>
    <Link to="/new-beer" className='hometeaser'>
    <img src="../images/random-beer.png" alt="Random Beer"/>
    <h3>New Beer</h3>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
    </Link>
    </div>

    </div>
    </div>
  )
}

export default HomePage