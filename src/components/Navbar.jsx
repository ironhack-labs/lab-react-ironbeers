import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Link to="/">
    <div className='text-3xl top-3 bottom-3 font-bold text-center text-purple-700 bg-orange-300'>Home</div>
    </Link>
  )
}

