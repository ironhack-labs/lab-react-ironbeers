import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  return (
    <nav>
        <NavLink to='/'>
            <FontAwesomeIcon icon={faHome}/>

        </NavLink>
    </nav>
  )
}

export default NavBar