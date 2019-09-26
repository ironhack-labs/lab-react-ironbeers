import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ name }) => {
  return (
    <nav
      className='container-fluid bg-light position-fixed w-100 border-bottom'
      style={{ top: '0', left: '0', zIndex: '2' }}
    >
      <div className='row'>
        <div className='col-12 py-4'>
          <Link to='/' className='text-dark text-decoration-none h5'>
            {name}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
