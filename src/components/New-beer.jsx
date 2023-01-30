import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../../src/assets/navbar.png'

function NewBeer() {
  return (
    <div>
     <Link to={'/'}> <img src={NavBar} alt="" /> </Link>
    </div>
  )
}

export default NewBeer