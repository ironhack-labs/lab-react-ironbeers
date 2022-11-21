import React from 'react'
import { Link } from 'react-router-dom'
import header from '../assets/header.png'
import Image from 'react-bootstrap/Image'

function Header() {
  return (
    <div>
        <Link to="/">
            <Image fluid="true" src={header} />
        </Link>
    </div>
  )
}

export default Header