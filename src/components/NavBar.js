import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
      <Link to='/'><img src='/images/navbar.png' alt=''/></Link>
  )
}
