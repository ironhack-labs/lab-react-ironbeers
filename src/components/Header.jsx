import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/' ><div class='homeButton'>Home</div></Link>
    </div>
  )
}

export default Header