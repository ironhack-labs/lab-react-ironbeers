import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <NavLink to="/" >
            <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="homepage-icon" />
       </NavLink>

      {/* <NavLink to="/">
        <button>Home</button>
      </NavLink>

      <NavLink to="/beers">
        <button>Beers</button>
      </NavLink>

      <NavLink to="/random-beer">
        <button>Random beers</button>
      </NavLink>

      <NavLink to="/new-beer">
        <button>New beers</button>
      </NavLink> 
 */}



    </nav>
  )
}

export default Navbar