import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <Link to='/'>
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" className="img-fluid" style={{width: '100%'}}/> 
      </Link>
  )
}

export default NavBar