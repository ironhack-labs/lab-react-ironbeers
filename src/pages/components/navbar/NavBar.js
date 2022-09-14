import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='bg-info row d-flex justify-content-start align-items-center '>
      <div className='col-12 text-center'>
        <Link to={'/'}><i class="fa fa-home text-light fs-1 p-4" aria-hidden="true"></i></Link>
      </div>
    </div>
  )
}

export default NavBar