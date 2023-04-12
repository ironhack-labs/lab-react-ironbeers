import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <><Link to={'/'}>
    <img src={'/header.png'} alt="header"/>
    </Link>
    </>
    
  )
}

export default Header