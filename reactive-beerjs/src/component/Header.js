import React from 'react'
import { Link } from 'react-router-dom'



const Header = () =>  (
    <nav className='navbar navbar-dark bg-primary'>
      <Link to='/'><img className='mt-2 mb-2' style={{width:'5%'}} src='img/home.png' alt='...'/></Link>
    </nav>
  )

export default Header