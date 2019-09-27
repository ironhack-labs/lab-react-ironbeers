import React from 'react'
import {Link} from 'react-router-dom'

const Layout = () => {
  return (
    <div>

      <header style={{display: 'flex', justifyContent: 'center', fontSize: '2rem'}}>
        <Link to='/'>
        <i class="fa fa-home"></i>
        </Link>
      </header>
    </div>
  )
}

export default Layout
