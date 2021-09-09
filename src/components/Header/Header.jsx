import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/solid';
import './Header.css'

export default function Header() {
  return(
    <div className='Header'>
      <Link to='/'>
        <HomeIcon className='HomeIcon' />
      </Link>
    </div>
  )
}