import React from 'react'
import { Link } from 'react-router-dom'
import HomeImage from "../assets/home.png"
function NavBar() {
  return (
    <div>
    
    
        <nav>
            <Link to="/"> <img src={HomeImage} alt=""/> </Link>
        </nav>
    </div>
  )
}

export default NavBar