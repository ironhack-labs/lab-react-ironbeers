import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
    <div className='nav'>
      <Link class="navbar-brand" to="/">
      <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' atl='navbar'/>  
      </Link>
    </div>
    </div>
  )
}

export default Header