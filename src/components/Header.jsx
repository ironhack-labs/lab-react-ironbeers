import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <ul className='navbar-nav mr-auto '>
            <li className='nav-item'>
              <Link  className='nav-link'  to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link  className='nav-link'  to='/beer'>Beer</Link>
            </li>
            <li className='nav-item'>
              <Link  className='nav-link'  to='/random-beer'>Random Beer</Link>
            </li>
            <li className='nav-item'>
              <Link  className='nav-link'  to='/new-beer'>Add a beer</Link>
            </li>
          </ul>
        </nav>
    )
}
