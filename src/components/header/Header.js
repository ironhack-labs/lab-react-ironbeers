import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Link to="/" className="text-decoration-none">
    <div className="text-bg-info d-flex justify-content-center"><i className='fa fa-house text-light fs-1 my-4'></i></div>
    </Link>
  )
}

export default Header