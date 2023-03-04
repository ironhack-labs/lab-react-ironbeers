import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <header>
            <Link to="/"><img className="topImg" src="https://static.vecteezy.com/system/resources/thumbnails/010/157/862/small/house-and-home-icon-symbol-sign-free-png.png"/></Link>
        </header>
    </div>
  )
}

export default Header