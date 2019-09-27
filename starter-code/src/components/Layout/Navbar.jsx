import React from 'react'
import { Link } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'

const Navbar = ({ name }) => {
  return (
    <nav
      className='container-fluid bg-light position-fixed w-100 border-bottom'
      style={{ top: '0', left: '0', zIndex: '2' }}
    >
      <div className='row py-4'>
        <div className='col-8'>
          <Link to='/' className='text-dark text-decoration-none h5'>
            {name}
          </Link>
        </div>
        <div className='col-4 text-right'>
          <Link to='/search' className='text-dark text-decoration-none text-muted h5'>
            <span className='mr-2'>
              <MdSearch />
            </span>
            <small>Search</small>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
