import React from 'react';
import home from '../assets/home.png';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <Link to="/">
     <img src={home}/>
     </Link>
  )
}
