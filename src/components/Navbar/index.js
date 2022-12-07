import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' >
            <img 
                src='https://cdn.pixabay.com/photo/2020/02/23/11/17/icon-4873054_1280.png'
                alt=''
                width='40'
            />
        </Link>
    </div>
  )
}

export default Navbar