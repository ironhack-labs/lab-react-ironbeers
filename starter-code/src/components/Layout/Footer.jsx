import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome, MdAdd, MdKitchen } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='container-fluid bg-light border-top position-fixed w-100' style={{ bottom: '0', left: '0' }}>
      <div className='row py-2 text-center'>
        <div className='col-4 border-right'>
          <Link to='/' className='text-secondary text-decoration-none'>
            <div className='h5 mb-0'>
              <MdHome />
            </div>
            <small>Home</small>
          </Link>
        </div>
        <div className='col-4 border-right'>
          <Link to='/add' className='text-dark text-decoration-none'>
            <div className='h5 mb-0'>
              <MdAdd />
            </div>
            <small>Add beer</small>
          </Link>
        </div>
        <div className='col-4'>
          <Link to='/random' className='text-secondary text-decoration-none'>
            <div className='h5 mb-0'>
              <MdKitchen />
            </div>
            <small>Random</small>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
