import React from 'react'
import {Link} from 'react-router-dom'
 
export default function NavBar(){
  return (
    <nav className="navbar fixed-top navbar-dark bg-primary mb-3">
      <Link to={'/'} className="navbar-brand">
        <img src='./beer-256.png' style={{height:'30px'}} alt='beer'/> IronBeers
      </Link>
    </nav>    
  )
}