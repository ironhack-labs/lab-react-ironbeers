import React from 'react'
import {Link} from 'react-router-dom'
import house from '../assets/house.png'
 
const Navigation = () => {
  return (
      <header>
          <Link className="header-nav" to="/">
          <img src={house} alt='xd'/>
          </Link>
      </header>
        
      
  )
}

export default Navigation