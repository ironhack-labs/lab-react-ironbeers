import React from 'react'
import { Link } from 'react-router-dom'
// import Allbeers from './Allbeers'
// import Randombeer from './Randombeer'
// import Newbeer from './Newbeer'

function Navbar() {
  return (
    <div className='menu'>
      <Link to="/beers">
        <span>All Beers List</span>
      </Link>

      <Link to="/randombeer">
        <span>Random Beer</span>
      </Link>

      <Link to="/newbeer">
        <span>New Beer</span>
      </Link>
    </div>
  )
}

export default Navbar